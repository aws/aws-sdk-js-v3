import { HttpRequest, HttpResponse } from "@smithy/protocol-http";

import { throw200ExceptionsMiddleware } from "./throw-200-exceptions";

describe("throw200ExceptionsMiddlewareOptions", () => {
  const mockNextHandler = jest.fn();
  const mockStreamCollector = jest.fn();
  const mockUtf8Encoder = jest.fn();
  const mockResponse = jest.fn();
  const mockConfig = {
    streamCollector: mockStreamCollector,
    utf8Encoder: mockUtf8Encoder,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("tests for statusCode < 200 and >= 300", () => {
    mockStreamCollector.mockResolvedValue(Buffer.from(""));
    mockUtf8Encoder.mockReturnValue("");

    it.each([199, 300])("results for statusCode %i", async (statusCode) => {
      mockNextHandler.mockReturnValue({
        response: mockResponse,
        statusCode,
        headers: {},
        body: "body",
      });
      const handler = throw200ExceptionsMiddleware(mockConfig)(mockNextHandler, {} as any);
      const result = await handler({
        input: {},
        request: new HttpRequest({
          hostname: "s3.us-east-1.amazonaws.com",
        }),
      });
      expect(result.response).toBe(mockResponse);
    });

    it("should throw if response body is empty", async () => {
      expect.assertions(3);
      mockStreamCollector.mockResolvedValue(Buffer.from(""));
      mockUtf8Encoder.mockReturnValue("");
      mockNextHandler.mockReturnValue({
        response: new HttpResponse({
          statusCode: 200,
          headers: {},
          body: "",
        }),
      });
      const handler = throw200ExceptionsMiddleware(mockConfig)(mockNextHandler, {} as any);
      try {
        await handler({
          input: {},
          request: new HttpRequest({
            hostname: "s3.us-east-1.amazonaws.com",
          }),
        });
      } catch (e) {
        expect(e).toBeDefined();
        expect(e.name).toEqual("InternalError");
        expect(e.message).toEqual("S3 aborted request");
      }
    });

    it("should throw if response body contains Error tag", async () => {
      const errorBody = `<?xml version="1.0" encoding="UTF-8"?>
    <Error>
      <Code>InternalError</Code>
      <Message>We encountered an internal error. Please try again.</Message>
      <RequestId>656c76696e6727732072657175657374</RequestId>
      <HostId>Uuag1LuByRx9e6j5Onimru9pO4ZVKnJ2Qz7/C1NPcfTWAtRPfTaOFg==</HostId>
    </Error>`;
      mockStreamCollector.mockResolvedValue(Buffer.from(errorBody));
      mockUtf8Encoder.mockReturnValue(errorBody);
      mockNextHandler.mockReturnValue({
        response: new HttpResponse({
          statusCode: 200,
          headers: {},
          body: "",
        }),
      });
      const handler = throw200ExceptionsMiddleware(mockConfig)(mockNextHandler, {} as any);
      const { response } = await handler({
        input: {},
        request: new HttpRequest({
          hostname: "s3.us-east-1.amazonaws.com",
        }),
      });
      expect(HttpResponse.isInstance(response)).toBe(true);
      // @ts-ignore
      expect(response.statusCode).toBeGreaterThanOrEqual(400);
    });
  });
});
