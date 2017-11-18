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
    let mockLogger: any;
    let composedHandler: Handler<any, any>;
    let mockSensitiveDataScrubber = jest.fn(() => 'params without sensitive information');

    beforeEach(async () => {
        mockLogger = {
            logOperationInfo: true,
            log: jest.fn(() => {}),
            warn: jest.fn(() => {}),
            error: jest.fn(() => {}),
            info: jest.fn(() => {}),
        };
        mockSensitiveDataScrubber = jest.fn(() => 'params without sensitive information');
        composedHandler = new logOperationInfoMiddleware(
            mockSensitiveDataScrubber,
            minimalMidleware, 
            {logger: mockLogger, model: minimalOperation}
        );
    })

    it('can correctly output', async () => {
        const res = await composedHandler.handle(handlerArgs);
        expect(res).toEqual('response');
    });

    it('censoring sensitive parameters function should be invoked', async () => {
        const res = await composedHandler.handle(handlerArgs);
        expect(mockSensitiveDataScrubber.mock.calls.length).toBe(2);
        expect(mockSensitiveDataScrubber.mock.calls[0][1].shape.type).toEqual('structure');
        expect(mockSensitiveDataScrubber.mock.calls[0][0]).toEqual({foo: 'foo'});
        expect(mockSensitiveDataScrubber.mock.calls[1][1].shape.type).toEqual('structure');
        expect(mockSensitiveDataScrubber.mock.calls[1][0]).toEqual("response");
    })

    it('should log correct stats in right format', async () => {
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

    it('should log correct stats in right format(with statusCode)', async () => {
        const mockResponseObj = {
            $metadata: {
                httpResponse: {statusCode: 200}
            }
        };
        const mockCoreHandler = function(args: any): Promise<any> {
            return new Promise((resolve) => {
                setTimeout(() => {resolve(mockResponseObj)}, 500);
            })
        };
        composedHandler = new logOperationInfoMiddleware(
            mockSensitiveDataScrubber,
            {handle: mockCoreHandler}, 
            {logger: mockLogger, model: minimalOperation}
        );
        const res = await composedHandler.handle(handlerArgs);
        expect(mockLogger.log.mock.calls.length).toBe(1);
        const logString = mockLogger.log.mock.calls[0][0];
        const statsArray = String.prototype.match.call(
            logString,
            /\[AWS (?:[\w ]+) (\d+) (?:[\d.]+)seconds\]\n(?:\w+)\(\n(?:.+),\n(?:.+)\n\)/
        );
        expect(statsArray.length).toBeGreaterThan(0);
        expect(statsArray[1]).toEqual('200');
    })
})
