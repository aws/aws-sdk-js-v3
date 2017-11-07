import {LogOperationMiddleware} from './'
import {Handler, HandlerArguments, Middleware, OperationModel, WritableLogger} from '@aws/types'

describe('LogOperationMiddleware', () => {
    const mockHandler = function(args: any): Promise<any> {
        return new Promise((resolve) => {
            setTimeout(() => {resolve('response')}, 1000);
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
    const mockLogger = {
        log: jest.fn(() => {}),
        warn: jest.fn(() => {}),
        error: jest.fn(() => {}),
        info: jest.fn(() => {}),
    }
    const mockParamsOperation = jest.fn(()=>{})

    it('middleware can correctly output', async() => {
        const composedHandler = new LogOperationMiddleware(
            minimalMidleware, 
            {logger: mockLogger, model: minimalOperation},
            mockParamsOperation
        )
        const handlerArgs: HandlerArguments<any> = {
            input: {foo: 'foo'}
        }
        const res = await composedHandler.handle(handlerArgs);
        expect(res).toBe('response');
    });

    it('print request stats', () => {
        const composedHandler = new LogOperationMiddleware(
            minimalMidleware, 
            {logger: mockLogger, model: minimalOperation},
            mockParamsOperation
        )
        const handlerArgs: HandlerArguments<any> = {
            input: {foo: 'foo'}
        }
        composedHandler.handle(handlerArgs);
        expect(mockLogger.log.mock.calls.length).toBe(1);
        const logString = mockLogger.log.mock.calls[0][0];
        expect(logString).toContain('AWS');
        expect(logString).toContain('AWS Foo Service');
        expect(logString).toContain('minimalOperation');
        expect(mockParamsOperation.mock.calls.length).toBe(2);
        expect(mockParamsOperation.mock.calls[0][1].shape.type).toEqual('structure');
        expect(mockParamsOperation.mock.calls[0][0]).toEqual({foo: 'foo'});
        expect(mockParamsOperation.mock.calls[1][1].shape.type).toEqual('structure');
        expect(mockParamsOperation.mock.calls[1][0]).toEqual("response");
    })
})
