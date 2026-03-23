import { TypeRegistry } from "@smithy/core/schema";
import { ServiceException } from "@smithy/smithy-client";
import type { HttpResponse as IHttpResponse, StaticErrorSchema } from "@smithy/types";
import { afterEach, describe, expect, test as it } from "vitest";

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
        expect(result.Error?.Type).toBeUndefined();
        expect(result.Error?.Code).toBeUndefined();
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
        expect(result.Error?.Code).toBe("SomeOtherException");
        expect(result.Error?.Type).toBe("Sender");
        expect(result.Error?.Message).toBe("I forgot my umbrella.");
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
        expect(result.Error?.Message).toBe("Since this is a spaceship, between zero and one.");
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

  describe("error composition", () => {
    afterEach(() => {
      TypeRegistry.for("com.example").clear();
      TypeRegistry.for("com.other").clear();
      TypeRegistry.for("smithy.ts.sdk.synthetic.com.example").clear();
    });

    describe("compose", () => {
      it("copies the static registry for the default namespace into the composite", () => {
        const lib = new ProtocolLib();
        const composite = TypeRegistry.for("composite.a");
        const staticReg = TypeRegistry.for("com.example");
        const schema: StaticErrorSchema = [-3, "com.example", "SomeError", { error: "client" }, ["Message"], [0]];
        staticReg.register("com.example#SomeError", schema);

        lib.compose(composite, "SomeError", "com.example");

        expect(composite.getSchema("com.example#SomeError")).toBe(schema);
        composite.clear();
      });

      it("copies the synthetic registry for the default namespace into the composite", () => {
        const lib = new ProtocolLib();
        const composite = TypeRegistry.for("composite.b");
        const syntheticReg = TypeRegistry.for("smithy.ts.sdk.synthetic.com.example");
        const baseSchema: StaticErrorSchema = [
          -3,
          "smithy.ts.sdk.synthetic.com.example",
          "ServiceException",
          { error: "client" },
          [],
          [],
        ];
        syntheticReg.register("smithy.ts.sdk.synthetic.com.example#ServiceException", baseSchema);

        lib.compose(composite, "SomeError", "com.example");

        expect(composite.getSchema("smithy.ts.sdk.synthetic.com.example#ServiceException")).toBe(baseSchema);
        composite.clear();
      });

      it("uses namespace from errorIdentifier when it contains #", () => {
        const lib = new ProtocolLib();
        const composite = TypeRegistry.for("composite.c");
        const otherReg = TypeRegistry.for("com.other");
        const schema: StaticErrorSchema = [-3, "com.other", "OtherError", { error: "client" }, [], []];
        otherReg.register("com.other#OtherError", schema);

        lib.compose(composite, "com.other#OtherError", "com.example");

        expect(composite.getSchema("com.other#OtherError")).toBe(schema);
        composite.clear();
      });
    });

    describe("getErrorSchemaOrThrowBaseException", () => {
      const metadata = { httpStatusCode: 400, requestId: "req-1" };
      const response = { statusCode: 400, headers: {}, body: undefined } as IHttpResponse;

      it("throws if compose was not called (errorRegistry not initialized)", async () => {
        const lib = new ProtocolLib();
        await expect(
          lib.getErrorSchemaOrThrowBaseException("SomeError", "com.example", response, {}, metadata)
        ).rejects.toThrow("error handler not initialized");
      });

      it("returns the error schema when found in the registry", async () => {
        const lib = new ProtocolLib();
        const composite = TypeRegistry.for("composite.d");
        const schema: StaticErrorSchema = [-3, "com.example", "SomeError", { error: "client" }, ["Message"], [0]];
        composite.register("com.example#SomeError", schema);
        lib.compose(composite, "com.example#SomeError", "com.example");

        const result = await lib.getErrorSchemaOrThrowBaseException(
          "com.example#SomeError",
          "com.example",
          response,
          {},
          metadata
        );
        expect(result.errorSchema).toBe(schema);
        expect(result.errorMetadata.$fault).toBe("client");
        composite.clear();
      });

      it("uses only the error name part of fully qualified error identifiers", async () => {
        const lib = new ProtocolLib();
        const composite = TypeRegistry.for("composite.f");
        const schema: StaticErrorSchema = [-3, "com.example", "SomeError", { error: "client" }, [], []];
        composite.register("com.example#SomeError", schema);
        lib.compose(composite, "com.example#SomeError", "com.example");

        const getErrorSchema = (registry: TypeRegistry, errorName: string) => {
          expect(errorName).toBe("SomeError");
          return registry.getSchema("com.example#SomeError") as StaticErrorSchema;
        };

        const result = await lib.getErrorSchemaOrThrowBaseException(
          "com.example#SomeError",
          "com.example",
          response,
          {},
          metadata,
          getErrorSchema
        );
        expect(result.errorSchema).toBe(schema);
        composite.clear();
      });

      it("throws a generic Error with errorName and message when no base exception and no schema found", async () => {
        const lib = new ProtocolLib();
        const composite = TypeRegistry.for("composite.g");
        lib.compose(composite, "UnknownError", "com.example");

        const error: any = await lib
          .getErrorSchemaOrThrowBaseException("UnknownError", "com.example", response, { message: "oops" }, metadata)
          .catch((e) => e);

        expect(error).toBeInstanceOf(Error);
        expect(error.name).toBe("UnknownError");
        expect(error.message).toBe("oops");
        expect(error.$fault).toBe("client");
        expect(error.$metadata).toEqual(metadata);
        composite.clear();
      });

      it("falls back to 'UnknownError' message when dataObject has no message fields", async () => {
        const lib = new ProtocolLib();
        const composite = TypeRegistry.for("composite.h");
        lib.compose(composite, "SomeError", "com.example");

        const error: any = await lib
          .getErrorSchemaOrThrowBaseException("SomeError", "com.example", response, {}, metadata)
          .catch((e) => e);

        expect(error.message).toBe("UnknownError");
        expect(error.name).toBe("SomeError");
        composite.clear();
      });

      it("throws base exception when base exception schema exists but error schema not found", async () => {
        const lib = new ProtocolLib();
        const composite = TypeRegistry.for("composite.i");

        class ServiceException extends Error {
          constructor(opts: any) {
            super(opts.name);
            this.name = opts.name ?? "ServiceException";
          }
        }

        const baseSchema: StaticErrorSchema = [
          -3,
          "smithy.ts.sdk.synthetic.com.example",
          "ServiceException",
          { error: "client" },
          [],
          [],
        ];
        composite.registerError(baseSchema, ServiceException);
        lib.compose(composite, "MissingError", "com.example");

        const error: any = await lib
          .getErrorSchemaOrThrowBaseException(
            "MissingError",
            "com.example",
            response,
            { message: "base exception message" },
            metadata
          )
          .catch((e) => e);

        expect(error).toBeInstanceOf(ServiceException);
        expect(error.$fault).toBe("client");
        // ErrorCtor receives { name: errorName }, so message is set by the constructor
        expect(error.name).toBe("MissingError");
        composite.clear();
      });

      it("uses dataObject.Message when dataObject.message is absent", async () => {
        const lib = new ProtocolLib();
        const composite = TypeRegistry.for("composite.j");
        lib.compose(composite, "SomeError", "com.example");

        const error: any = await lib
          .getErrorSchemaOrThrowBaseException(
            "SomeError",
            "com.example",
            response,
            { Message: "capital M message" },
            metadata
          )
          .catch((e) => e);

        expect(error.message).toBe("capital M message");
        composite.clear();
      });
    });
  });
});
