import {FetchHttpHandler} from './index';
import * as httpHandler from './http-handler';

describe('FetchHttpHandler', () => {
    const mockResponseParser = {
        parse: jest.fn()
    };
    const mockHandler = {
        handle: jest.fn()
    };
    const mockContext = {
        logger: jest.fn(),
        model: {} as any
    };
    let spyHttpHandler: jest.Mock<any>;

    beforeEach(() => {
        jest.resetAllMocks();
    });


    describe('#handle', () => {

        beforeEach(() => {
            spyHttpHandler = jest.spyOn(httpHandler, 'httpHandler')
                .mockImplementationOnce(() => Promise.resolve());
        });

        it(
            'calls httpHandler',
            async () => {
                const mockOutput = {};
                mockResponseParser.parse.mockReturnValue(mockOutput);

                const fetchHandler = new FetchHttpHandler(
                    mockResponseParser,
                    mockHandler,
                    mockContext
                );
                const output = await fetchHandler.handle({
                    request: {} as any,
                    input: {}
                });

                expect(spyHttpHandler.mock.calls.length).toBe(1);
                expect(output).toBe(mockOutput);
            }
        );

        it(
            'returns the result of ResponseParser.parse',
            async () => {
                const mockOutput = {};
                mockResponseParser.parse.mockReturnValue(mockOutput);

                const fetchHandler = new FetchHttpHandler(
                    mockResponseParser,
                    mockHandler,
                    mockContext
                );
                const output = await fetchHandler.handle({
                    request: {} as any,
                    input: {}
                });

                expect(mockResponseParser.parse.mock.calls.length).toBe(1);
                expect(output).toBe(mockOutput);
            }
        );

        it(
            `throws an error if a request isn't provided`,
            async () => {
                const fetchHandler = new FetchHttpHandler(
                    mockResponseParser,
                    mockHandler,
                    mockContext
                );
                await expect(fetchHandler.handle({
                    input: {}
                })).rejects.toHaveProperty('message');

                expect(spyHttpHandler.mock.calls.length).toBe(0);
                expect(mockResponseParser.parse.mock.calls.length).toBe(0);
            }
        );
    });
});