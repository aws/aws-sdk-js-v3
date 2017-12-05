import {coreHandler} from './index';

describe('CoreHandler', () => {
    const mockResponse = {};
    const mockResponseParser = {
        parse: jest.fn(() => Promise.resolve(mockResponse))
    };
    const mockHttpHandler = {
        destroy: jest.fn(),
        handle: jest.fn(() => Promise.resolve())
    };
    const mockExecutionContext = {
        model: {} as any,
        logger: {} as any
    };
    const handler = coreHandler(mockHttpHandler, mockResponseParser, mockExecutionContext);

    describe('#handle', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });

        it(`calls the httpHandler's handle method`, async () => {
            await handler({
                input: {},
                request: {} as any
            });

            expect(mockHttpHandler.handle.mock.calls.length).toBe(1);
        });

        it(`forwards abortSignal to httpHandler`, async () => {
            const mockAbortSignal = {};
            await handler({
                abortSignal: mockAbortSignal as any,
                input: {},
                request: {} as any
            });

            expect(mockHttpHandler.handle.mock.calls.length).toBe(1);
            expect(mockHttpHandler.handle.mock.calls[0][1].abortSignal).toBe(mockAbortSignal);
        });

        it(`returns the responseParser's output`, async () => {
            let output = await handler({
                input: {},
                request: {} as any
            });

            expect(mockResponseParser.parse.mock.calls.length).toBe(1);
            expect(output).toBe(mockResponse);
        });

        it(`passes the model to the responseParser`, async () => {
            let output = await handler({
                input: {},
                request: {} as any
            });

            expect(mockResponseParser.parse.mock.calls.length).toBe(1);
            expect(mockResponseParser.parse.mock.calls[0][0]).toBe(mockExecutionContext.model);
            expect(output).toBe(mockResponse);
        });

        it('throws an error if request is missing', async () => {
            await expect(handler({
                input: {},
            })).rejects.toHaveProperty('message');

            expect(mockHttpHandler.handle.mock.calls.length).toBe(0);
            expect(mockResponseParser.parse.mock.calls.length).toBe(0);
        });
    });
});
