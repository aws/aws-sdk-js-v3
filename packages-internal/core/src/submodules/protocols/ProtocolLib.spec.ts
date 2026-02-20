import { describe, expect, test as it } from "vitest";

import { ProtocolLib } from "./ProtocolLib";
import { ServiceException } from "@smithy/smithy-client";

describe("ProtocolLib", () => {
  describe("decorateServiceException", () => {
    describe("queryCompat mode", () => {
      it("should handle missing error.Error gracefully when x-amzn-query-error header is absent", () => {
        // When queryCompat=true but x-amzn-query-error header is absent,
        // error.Error is undefined. The method should not throw TypeError.
        const lib = new ProtocolLib(true);

        const exception = Object.assign(new Error("AccessDeniedException"), {
          $fault: "client" as const,
          $metadata: {
            httpStatusCode: 403,
            requestId: "test-request-id",
          },
        }) as ServiceException;

        const additions = {
          message: "User is not authorized to perform this action",
          // Note: no Error property since x-amzn-query-error header was absent
        };

        // Should not throw TypeError: Cannot read properties of undefined (reading 'Type')
        const result = lib.decorateServiceException(exception, additions);

        // Verify the exception is properly decorated (error should not crash)
        expect(result.$fault).toBe("client");
        expect(result.$metadata.requestId).toBe("test-request-id");
        expect(result.RequestId).toBe("test-request-id");

        // error.Error should be created with undefined values for Type and Code
        // when setQueryCompatError was not called (header absent)
        expect(result.Error).toBeDefined();
        expect(result.Error.Type).toBeUndefined();
        expect(result.Error.Code).toBeUndefined();
      });

      it("should properly populate error.Error when x-amzn-query-error header is present", () => {
        const lib = new ProtocolLib(true);

        const exception = Object.assign(new Error("AccessDeniedException"), {
          $fault: "client" as const,
          $metadata: {
            httpStatusCode: 403,
            requestId: "test-request-id",
          },
        }) as ServiceException;

        const additions = {
          message: "User is not authorized to perform this action",
          Error: {
            Code: "AccessDeniedException",
            Type: "Sender",
            Message: "User is not authorized to perform this action",
          },
        };

        const result = lib.decorateServiceException(exception, additions);

        expect(result.Error).toBeDefined();
        expect(result.Error.Code).toBe("AccessDeniedException");
        expect(result.Error.Type).toBe("Sender");
        expect(result.Error.Message).toBe("User is not authorized to perform this action");
      });

      it("should use Message from additions when error.Error is missing", () => {
        const lib = new ProtocolLib(true);

        const exception = Object.assign(new Error("ValidationException"), {
          $fault: "client" as const,
          $metadata: {
            httpStatusCode: 400,
            requestId: "test-request-id-2",
          },
          Message: "Invalid input parameter",
        }) as ServiceException;

        const additions = {
          Message: "Invalid input parameter",
        };

        const result = lib.decorateServiceException(exception, additions);

        // The message property is set from Message
        expect(result.message).toBe("Invalid input parameter");
        expect(result.Error.Message).toBe("Invalid input parameter");
      });
    });

    describe("non-queryCompat mode", () => {
      it("should delegate to decorateServiceException without modification", () => {
        const lib = new ProtocolLib(false);

        const exception = Object.assign(new Error("SomeError"), {
          $fault: "server" as const,
          $metadata: {
            httpStatusCode: 500,
          },
        }) as ServiceException;

        const additions = {
          message: "Server error occurred",
        };

        const result = lib.decorateServiceException(exception, additions);

        // In non-queryCompat mode, Error property should not be set
        expect((result as any).Error).toBeUndefined();
        expect((result as any).RequestId).toBeUndefined();
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
      };

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
    });
  });
});
