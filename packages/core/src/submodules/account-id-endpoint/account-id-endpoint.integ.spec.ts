import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { AwsCredentialIdentity } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, test as it } from "vitest";

describe("account id endpoint", () => {
  const credentialsWithAccountId: AwsCredentialIdentity = {
    accessKeyId: "INTEG_TEST",
    secretAccessKey: "INTEG_TEST",
    accountId: "123456789012",
  };
  const credentials = {
    accessKeyId: "INTEG_TEST",
    secretAccessKey: "INTEG_TEST",
  };

  beforeEach(async () => {
    delete process.env.AWS_ACCOUNT_ID_ENDPOINT_MODE;
  });
  afterEach(async () => {
    delete process.env.AWS_ACCOUNT_ID_ENDPOINT_MODE;
  });

  describe("when credentials have account id", () => {
    it("should default to resolving endpoint with account id when it is available in the client credentials", async () => {
      const ddb = new DynamoDB({
        region: "us-west-2",
        credentials: credentialsWithAccountId,
      });
      requireRequestsFrom(ddb).toMatch({
        hostname: /123456789012.ddb.us-west-2.amazonaws.com/,
      });
      await ddb.listTables();
    });

    describe("config values", () => {
      it("disabled", async () => {
        const ddb = new DynamoDB({
          region: "us-west-2",
          credentials: credentialsWithAccountId,
          accountIdEndpointMode: "disabled",
        });
        requireRequestsFrom(ddb).toMatch({
          hostname: /dynamodb.us-west-2.amazonaws.com/,
        });
        await ddb.listTables();
      });
      it("preferred", async () => {
        const ddb = new DynamoDB({
          region: "us-west-2",
          credentials: credentialsWithAccountId,
          accountIdEndpointMode: "preferred",
        });
        requireRequestsFrom(ddb).toMatch({
          hostname: /123456789012.ddb.us-west-2.amazonaws.com/,
        });
        await ddb.listTables();
      });
      it("required", async () => {
        const ddb = new DynamoDB({
          region: "us-west-2",
          credentials: credentialsWithAccountId,
          accountIdEndpointMode: "required",
        });
        requireRequestsFrom(ddb).toMatch({
          hostname: /123456789012.ddb.us-west-2.amazonaws.com/,
        });
        await ddb.listTables();
      });
    });

    describe("ENV values", () => {
      it("disabled", async () => {
        process.env.AWS_ACCOUNT_ID_ENDPOINT_MODE = "disabled";
        const ddb = new DynamoDB({
          region: "us-west-2",
          credentials: credentialsWithAccountId,
        });
        requireRequestsFrom(ddb).toMatch({
          hostname: /dynamodb.us-west-2.amazonaws.com/,
        });
        await ddb.listTables();
      });
      it("preferred", async () => {
        process.env.AWS_ACCOUNT_ID_ENDPOINT_MODE = "preferred";
        const ddb = new DynamoDB({
          region: "us-west-2",
          credentials: credentialsWithAccountId,
        });
        requireRequestsFrom(ddb).toMatch({
          hostname: /123456789012.ddb.us-west-2.amazonaws.com/,
        });
        await ddb.listTables();
      });
      it("required", async () => {
        process.env.AWS_ACCOUNT_ID_ENDPOINT_MODE = "required";
        const ddb = new DynamoDB({
          region: "us-west-2",
          credentials: credentialsWithAccountId,
        });
        requireRequestsFrom(ddb).toMatch({
          hostname: /123456789012.ddb.us-west-2.amazonaws.com/,
        });
        await ddb.listTables();
      });
    });
  });

  describe("when credentials do not have account id", () => {
    it("it follows that the hostname will not have it either", async () => {
      const ddb = new DynamoDB({
        region: "us-west-2",
        credentials: credentials,
      });
      requireRequestsFrom(ddb).toMatch({
        hostname: /dynamodb.us-west-2.amazonaws.com/,
      });
      await ddb.listTables();
    });

    it("will fail if required by ENV", async () => {
      process.env.AWS_ACCOUNT_ID_ENDPOINT_MODE = "required";
      const ddb = new DynamoDB({
        region: "us-west-2",
        credentials: credentials,
      });
      const error = await ddb.listTables().catch((e) => e);
      expect(error.name).toEqual("EndpointError");
    });

    it("will fail if required by config", async () => {
      const ddb = new DynamoDB({
        region: "us-west-2",
        credentials: credentials,
        accountIdEndpointMode: "required",
      });
      const error = await ddb.listTables().catch((e) => e);
      expect(error.name).toEqual("EndpointError");
    });
  });
});
