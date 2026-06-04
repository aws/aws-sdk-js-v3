import { Lambda, LambdaServiceException, ResourceNotFoundException } from "@aws-sdk/client-lambda";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(Lambda.name, () => {
  let client: Lambda;

  beforeAll(async () => {
    client = new Lambda({ region: "us-west-2", credentials: aws?.testCredentials });
  });

  describe("Listing functions", () => {
    it("should successfully list functions", async () => {
      const result = await client.listFunctions({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Functions)).toBe(true);
    });
  });

  describe("Error types", () => {
    it("should throw a modeled ResourceNotFoundException", async () => {
      try {
        await client.getFunction({ FunctionName: "nonexistent-fn-sdk-e2e-test" });
        expect.fail("expected error");
      } catch (e: any) {
        expect(e).toBeInstanceOf(ResourceNotFoundException);
        expect(e).toBeInstanceOf(LambdaServiceException);
        expect(e.name).toBe("ResourceNotFoundException");
        expect(e.$metadata.httpStatusCode).toBe(404);
        if (e.$response?.headers?.["x-amzn-errortype"]) {
          expect(e.$response.headers["x-amzn-errortype"]).toBe("ResourceNotFoundException");
        }
      }
    });

    it("should throw a base LambdaServiceException for invalid parameter", async () => {
      try {
        await client.getFunction({ FunctionName: "!!!invalid!!!" });
        expect.fail("expected error");
      } catch (e: any) {
        expect(e).toBeInstanceOf(LambdaServiceException);
        expect(Object.getPrototypeOf(e)).toBe(LambdaServiceException.prototype);
        expect(e.$metadata.httpStatusCode).toBe(400);
        if (e.$response?.headers?.["x-amzn-errortype"]) {
          expect(e.$response.headers["x-amzn-errortype"]).toBe("ValidationException");
        }
      }
    });
  });
});
