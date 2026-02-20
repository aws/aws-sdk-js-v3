import { ServiceException } from "@smithy/smithy-client";
import { type HttpResponse as IHttpResponse } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { ProtocolLib } from "./ProtocolLib";

describe("ProtocolLib", () => {
  interface QueryCompatibleErrorShape {
    RequestId?: string;
    Error?: {
      Code?: string;
      Type?: string;
      Message?: string;
    };
  }

  class AwsQueryIncompatibleError extends ServiceException implements QueryCompatibleErrorShape {
    public RequestId?: string;
    public Error?: {
      Code?: string;
      Type?: string;
      Message?: string;
    };
    public constructor(opts: any) {
      super({
        name: "AwsQueryIncompatibleError",
        $fault: "client",
        ...opts,
      });
      this.name = "AwsQueryIncompatibleError";
    }
  }

  describe("decorateServiceException", () => {
    describe("queryCompat mode", () => {
      it("should handle missing error.Error gracefully when x-amzn-query-error header is absent", () => {
        const lib = new ProtocolLib(true);

        const error = new AwsQueryIncompatibleError({
          $metadata: {
            httpStatusCode: 403,
            requestId: "test-request-id",
          },
        });

        const additions = {
          message: "User is not authorized to perform this action",
          // Note: no Error property since x-amzn-query-error header was absent
        };

        const result = lib.decorateServiceException(error, additions);

        expect(result.$fault).toBe("client");
        expect(result.$metadata.requestId).toBe("test-request-id");
        expect(result.RequestId).toBe("test-request-id");

        expect(result.Error).toBeDefined();
        expect(result.Error.Type).toBeUndefined();
        expect(result.Error.Code).toBeUndefined();
      });

      it("should properly populate error.Error when it exists on the unmodeled error response structure", () => {
        const lib = new ProtocolLib(true);

        const error = new AwsQueryIncompatibleError({
          $metadata: {
            httpStatusCode: 403,
            requestId: "test-request-id",
          },
        });

        const additions = {
          Error: {
            Code: "SomeOtherException",
            Type: "Sender",
            Message: "I forgot my umbrella.",
          },
        };

        const result = lib.decorateServiceException(error, additions);

        expect(result.Error).toBeDefined();
        expect(result.Error.Code).toBe("SomeOtherException");
        expect(result.Error.Type).toBe("Sender");
        expect(result.Error.Message).toBe("I forgot my umbrella.");
      });

      it("should use Message from additions when error.Error is missing", () => {
        const lib = new ProtocolLib(true);

        const error = new AwsQueryIncompatibleError({
          $fault: "client" as const,
          $metadata: {
            httpStatusCode: 400,
            requestId: "test-request-id-2",
          },
          Message: "To shreds you say?",
        });

        const additions = {
          Message: "Since this is a spaceship, between zero and one.",
        };

        const result = lib.decorateServiceException(error, additions);

        // The message property is set from Message
        expect(result.message).toBe("Since this is a spaceship, between zero and one.");
        expect(result.Error.Message).toBe("Since this is a spaceship, between zero and one.");
      });
    });

    describe("non-queryCompat mode", () => {
      it("should delegate to decorateServiceException without modification", () => {
        const lib = new ProtocolLib(false);

        const exception = new AwsQueryIncompatibleError({
          $fault: "server" as const,
          $metadata: {
            httpStatusCode: 500,
          },
        });

        const additions = {
          message: "load shedding",
        };

        const result = lib.decorateServiceException(exception, additions);

        // In non-queryCompat mode, Error property should not be set
        expect((result as any).Error).toBeUndefined();
        expect((result as any).RequestId).toBeUndefined();
        expect(result.message).toEqual("load shedding");
      });
    });
  });

  describe("setQueryCompatError", () => {
    it("should set Error property when x-amzn-query-error header is present", () => {
      const lib = new ProtocolLib(true);

      const output: Record<string, any> = {
        message: "Access denied",
      };

      const response = {
        statusCode: 403,
        headers: {
          "x-amzn-query-error": "AccessDeniedException;Sender",
        },
        body: undefined,
      } as IHttpResponse;

      lib.setQueryCompatError(output, response);

      expect(output.Error).toBeDefined();
      expect(output.Error.Code).toBe("AccessDeniedException");
      expect(output.Error.Type).toBe("Sender");
      expect(output.Error.Message).toBe("Access denied");
    });

    it("should not set Error property when x-amzn-query-error header is absent", () => {
      const lib = new ProtocolLib(true);

      const output: Record<string, any> = {
        message: "Access denied",
      };

      const response = {
        statusCode: 403,
        headers: {},
        body: undefined,
      };

      lib.setQueryCompatError(output, response);

      expect(output.Error).toBeUndefined();
      expect(output.message).toBe("Access denied");
    });
  });
});
