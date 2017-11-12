import {LogOperationMiddleware} from './'
import {Handler, HandlerArguments, Middleware, OperationModel, WritableLogger} from '@aws/types'

describe('LogOperationMiddleware', () => {
    const mockHandler = function(args: any): Promise<any> {
        return new Promise((resolve) => {
            setTimeout(() => {resolve('response')}, 500);
        })
    };
    const minimalMidleware: Handler<any, any> = {
        handle: mockHandler
    }
    const minimalOperation: OperationModel = {
        metadata: {
            apiVersion: '2017-09-21',
            endpointPrefix: 'foo',
            protocol: 'query',
            serviceFullName: 'AWS Foo Service',
            signatureVersion: 'v4',
            uid: 'foo-2017-09-21'
        },
        name: 'minimalOperation',
        http: {
            method: 'POST',
            requestUri: '/'
        },
        input: {
            shape: {
                type: 'structure',
                required: [],
                members: {}
            },
        },
        output: {
            shape: {
                type: 'structure',
                required: [],
                members: {}
            },
        },
        errors: []
    };
    let handlerArgs: HandlerArguments<any> = {
        input: {foo: 'foo'}
    }
    const mockParamsOperation = jest.fn(() => 'params without sensitive infomation');

    describe('when formatter is not specified', () => {
        let mockLogger: any = {
            formatter: undefined,
            log: jest.fn(() => {}),
            warn: jest.fn(() => {}),
            error: jest.fn(() => {}),
            info: jest.fn(() => {}),
        };
        let composedHandler: Handler<any, any> = new LogOperationMiddleware(
            minimalMidleware, 
            {logger: mockLogger, model: minimalOperation},
            mockParamsOperation
        )
        it('should not log when formatter is not specified', async () => {
            const res = await composedHandler.handle(handlerArgs);
            expect(res).toBe('response');
            expect(mockLogger.log.mock.calls.length).toBe(0);
            expect(mockLogger.warn.mock.calls.length).toBe(0);
            expect(mockLogger.error.mock.calls.length).toBe(0);
            expect(mockLogger.info.mock.calls.length).toBe(0);
        })
    })

    describe('when specified formatter', () => {
        let mockLogger: any;
        let composedHandler: Handler<any, any>;
        let mockParamsOperation = jest.fn(() => 'params without sensitive information');
        beforeEach(async () => {
            mockLogger = {
                formatter: {format: jest.fn(() => 'formatted')},
                log: jest.fn(() => {}),
                warn: jest.fn(() => {}),
                error: jest.fn(() => {}),
                info: jest.fn(() => {}),
            };
            mockParamsOperation = jest.fn(() => 'params without sensitive information');
            composedHandler = new LogOperationMiddleware(
                minimalMidleware, 
                {logger: mockLogger, model: minimalOperation},
                mockParamsOperation
            );
        })

        it('middleware can correctly output with formatter', async () => {
            const res = await composedHandler.handle(handlerArgs);
            expect(res).toBe('response');
        });

        it('paramOperation function should be invoked', async () => {
            const res = await composedHandler.handle(handlerArgs);
            expect(mockParamsOperation.mock.calls.length).toBe(2);
            expect(mockParamsOperation.mock.calls[0][1].shape.type).toEqual('structure');
            expect(mockParamsOperation.mock.calls[0][0]).toEqual({foo: 'foo'});
            expect(mockParamsOperation.mock.calls[1][1].shape.type).toEqual('structure');
            expect(mockParamsOperation.mock.calls[1][0]).toEqual("response");
        })

        it('formatter should get correct stats', async () => {
            const res = await composedHandler.handle(handlerArgs);
            expect(mockLogger.formatter.format.mock.calls.length).toBe(1);
            const requestInfo = mockLogger.formatter.format.mock.calls[0][0];
            expect(requestInfo.input).toEqual('params without sensitive information');
            expect(requestInfo.output).toEqual('params without sensitive information');
            expect(requestInfo.operationName).toEqual('minimalOperation');
            expect({
                method: requestInfo.method,
                requestUri: requestInfo.requestUri
            }).toEqual(minimalOperation.http);
            expect({
                apiVersion: requestInfo.apiVersion,
                endpointPrefix: requestInfo.endpointPrefix,
                protocol: requestInfo.protocol,
                serviceFullName: requestInfo.serviceFullName,
                signatureVersion: requestInfo.signatureVersion,
                uid: requestInfo.uid
            }).toEqual(minimalOperation.metadata);
            expect(mockLogger.log.mock.calls.length).toBe(1);
        })
    })
})
