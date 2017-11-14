import {logOperationInfoMiddleware} from './'
import {
    Handler,
    HandlerArguments,
    OperationModel
} from '@aws/types'

describe('logOperationInfoMiddleware', () => {
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

    describe('when user doesn\'t open logOperationInfo', () => {
        let mockLogger = {
            logOperationInfo: false,
            log: jest.fn(() => {}),
            warn: jest.fn(() => {}),
            error: jest.fn(() => {}),
            info: jest.fn(() => {}),
        };
        let composedHandler: Handler<any, any> = new logOperationInfoMiddleware(
            minimalMidleware, 
            {logger: mockLogger, model: minimalOperation},
            mockParamsOperation
        )
        it('should not log anything', async () => {
            const res = await composedHandler.handle(handlerArgs);
            expect(res).toBe('response');
            expect(mockParamsOperation.mock.calls.length).toBe(0);
        })
    })

    describe('when using debug mode', () => {
        let mockLogger: any;
        let composedHandler: Handler<any, any>;
        let mockParamsOperation = jest.fn(() => 'params without sensitive information');
        beforeEach(async () => {
            mockLogger = {
                logOperationInfo: true,
                log: jest.fn(() => {}),
                warn: jest.fn(() => {}),
                error: jest.fn(() => {}),
                info: jest.fn(() => {}),
            };
            mockParamsOperation = jest.fn(() => 'params without sensitive information');
            composedHandler = new logOperationInfoMiddleware(
                minimalMidleware, 
                {logger: mockLogger, model: minimalOperation},
                mockParamsOperation
            );
        })

        it('middleware can correctly output', async () => {
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
            expect(mockLogger.log.mock.calls.length).toBe(1);
            const logString = mockLogger.log.mock.calls[0][0];
            const statsArray = String.prototype.match.call(
                logString,
                /\[AWS ([\w ]+) ([\d.]+)seconds\]\n(\w+)\(\n(.+),\n(.+)\n\)/
            );
            expect(statsArray.length).toBeGreaterThan(0);
            expect(statsArray[1]).toEqual('AWS Foo Service');
            expect(
                Math.abs(
                    Number(statsArray[2] - 500/1000)
                )
            ).toBeLessThan(0.01),
            expect(statsArray[3]).toEqual('minimalOperation');
            expect(statsArray[4]).toEqual('params without sensitive information');
            expect(statsArray[5]).toEqual('params without sensitive information');
        })
    })
})
