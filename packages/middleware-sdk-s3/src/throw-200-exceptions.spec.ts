import { HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { toUtf8 } from "@smithy/util-utf8";
import { Readable } from "stream";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { throw200ExceptionsMiddleware } from "./throw-200-exceptions";

describe("throw200ExceptionsMiddlewareOptions", () => {
  const mockNextHandler = vi.fn();
  const mockResponse = vi.fn();
  const mockConfig = {
    utf8Encoder: toUtf8,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("tests for statusCode < 200 and >= 300", () => {
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
      mockNextHandler.mockReturnValue({
        response: new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Readable.from(Buffer.from("")),
        }),
      });
      const handler = throw200ExceptionsMiddleware(mockConfig)(mockNextHandler, {
        commandName: "CompleteMultipartUploadCommand",
      } as any);
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
      mockNextHandler.mockReturnValue({
        response: new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Readable.from(Buffer.from(errorBody)),
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

    it("should not throw if the Error tag is not the top XML element", async () => {
      const errorBody = `<?xml version="1.0" encoding="UTF-8"?>
<DeleteResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
 <Deleted>
   <Key>sample1.txt</Key>
 </Deleted>
 <Error>
  <Key>sample2.txt</Key>
  <Code>AccessDenied</Code>
  <Message>Access Denied</Message>
 </Error>
</DeleteResult>`;
      mockNextHandler.mockReturnValue({
        response: new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Readable.from(Buffer.from(errorBody)),
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
      expect(response.statusCode).toEqual(200);
    });

    /**
     * This is an exception to the specification. We cannot afford to read
     * a streaming body for its entire duration just to check for an extremely unlikely
     * terminating XML tag if the stream is very long.
     */
    it("should not throw if the Error tag is on an excessively long body", async () => {
      const errorBody = `<?xml version="1.0" encoding="UTF-8"?>
<Error xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
 ${"a".repeat(3000)}
</Error>`;
      mockNextHandler.mockReturnValue({
        response: new HttpResponse({
          statusCode: 200,
          headers: {},
          body: Readable.from(Buffer.from(errorBody)),
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
      expect(response.statusCode).toEqual(200);
    });
  });
});
