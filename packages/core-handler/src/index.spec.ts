import { coreHandler } from "./index";
import { ResponseParser } from "@aws-sdk/types";

describe("CoreHandler", () => {
  const mockResponse = {};
  const mockResponseParser = {
    parse: jest.fn().mockResolvedValue(mockResponse)
  };
  const mockHttpHandler = {
    destroy: jest.fn(),
    handle: jest.fn().mockResolvedValue("")
  };
  const mockExecutionContext = {
    model: {} as any,
    logger: {} as any
  };
  const handler = coreHandler(
    mockHttpHandler,
    mockResponseParser as ResponseParser
  )(mockExecutionContext);

  describe("#handle", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it(`calls the httpHandler's handle method`, async () => {
      await handler({
        input: {} as never,
        request: {} as any
      });

      expect(mockHttpHandler.handle.mock.calls.length).toBe(1);
    });

    it(`forwards abortSignal to httpHandler`, async () => {
      const mockAbortSignal = {};
      await handler({
        input: {
          $abortSignal: mockAbortSignal
        } as never,
        request: {} as any
      });

      expect(mockHttpHandler.handle.mock.calls.length).toBe(1);
      expect(mockHttpHandler.handle.mock.calls[0][1].abortSignal).toBe(
        mockAbortSignal
      );
    });

    it(`returns the responseParser's output`, async () => {
      let output = await handler({
        input: {} as never,
        request: {} as any
      });

      expect(mockResponseParser.parse.mock.calls.length).toBe(1);
      expect(output).toBe(mockResponse);
    });

    it(`passes the model to the responseParser`, async () => {
      let output = await handler({
        input: {} as never,
        request: {} as any
      });

      expect(mockResponseParser.parse.mock.calls.length).toBe(1);
      expect(mockResponseParser.parse.mock.calls[0][0]).toEqual(
        mockExecutionContext.model
      );
      expect(output).toBe(mockResponse);
    });
  });
});
