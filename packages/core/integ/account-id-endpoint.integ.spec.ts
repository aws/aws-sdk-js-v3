import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import type { AccountIdEndpointMode } from "@aws-sdk/core/account-id-endpoint";
import type { AwsCredentialIdentity } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, test as it } from "vitest";

describe("account id endpoint", () => {
  const region = "us-west-2";

  beforeEach(async () => {
    delete process.env.AWS_ACCOUNT_ID_ENDPOINT_MODE;
  });

  afterEach(async () => {
    delete process.env.AWS_ACCOUNT_ID_ENDPOINT_MODE;
  });

  describe("when credentials have account id", () => {
    const credentials: AwsCredentialIdentity = {
      accessKeyId: "INTEG_TEST",
      secretAccessKey: "INTEG_TEST",
      accountId: "123456789012",
    };

    it("should default to resolving endpoint with account id when it is available in the client credentials", async () => {
      const ddb = new DynamoDB({
        region,
        credentials,
      });
      requireRequestsFrom(ddb).toMatch({
        hostname: /123456789012.ddb.us-west-2.amazonaws.com/,
      });
      await ddb.listTables();
    });

    describe("config values", () => {
      it.each([
        ["dynamodb", "disabled"],
        ["123456789012.ddb", "preferred"],
        ["123456789012.ddb", "required"],
      ])(
        "should match prefix '%s' for when accountId endpoint mode is '%s' in config",
        async (expectedHostnamePrefix, mode) => {
          const ddb = new DynamoDB({
            region,
            credentials,
            accountIdEndpointMode: mode as AccountIdEndpointMode,
          });
          requireRequestsFrom(ddb).toMatch({
            hostname: `${expectedHostnamePrefix}.${region}.amazonaws.com`,
          });
          await ddb.listTables();
        }
      );
    });

    describe("ENV values", () => {
      it.each([
        ["dynamodb", "disabled"],
        ["123456789012.ddb", "preferred"],
        ["123456789012.ddb", "required"],
      ])(
        "should match prefix '%s' for when accountId endpoint mode is '%s' in ENV",
        async (expectedHostnamePrefix, mode) => {
          process.env.AWS_ACCOUNT_ID_ENDPOINT_MODE = mode;
          const ddb = new DynamoDB({
            region,
            credentials,
          });
          requireRequestsFrom(ddb).toMatch({
            hostname: `${expectedHostnamePrefix}.${region}.amazonaws.com`,
          });
          await ddb.listTables();
        }
      );
    });
  });

  describe("when credentials do not have account id", () => {
    const credentials = {
      accessKeyId: "INTEG_TEST",
      secretAccessKey: "INTEG_TEST",
    };

    it("it follows that the hostname will not have it either", async () => {
      const ddb = new DynamoDB({
        region,
        credentials,
      });
      requireRequestsFrom(ddb).toMatch({
        hostname: /dynamodb.us-west-2.amazonaws.com/,
      });
      await ddb.listTables();
    });

    it("will fail if required by ENV", async () => {
      process.env.AWS_ACCOUNT_ID_ENDPOINT_MODE = "required";
      const ddb = new DynamoDB({
        region,
        credentials,
      });
      const error = await ddb.listTables().catch((e) => e);
      expect(error.name).toEqual("EndpointError");
    });

    it("will fail if required by config", async () => {
      const ddb = new DynamoDB({
        region,
        credentials,
        accountIdEndpointMode: "required",
      });
      const error = await ddb.listTables().catch((e) => e);
      expect(error.name).toEqual("EndpointError");
    });
  });
});
