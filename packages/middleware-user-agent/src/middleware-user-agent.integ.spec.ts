import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { CodeCatalyst } from "@aws-sdk/client-codecatalyst";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { AwsSdkFeatures } from "@aws-sdk/types";
import { describe, expect, test as it } from "vitest";

describe("middleware-user-agent", () => {
  describe(CodeCatalyst.name, () => {
    it("sets the SDK user agent", async () => {
      const client = new CodeCatalyst({
        region: "us-west-2",
        token: {
          token: "my-token",
        },
      });
      requireRequestsFrom(client).toMatch({
        headers: {
          "x-amz-user-agent": /aws-sdk-js\/[\d\.]+/,
          "user-agent": /aws-sdk-js\/[\d\.]+ (.*?)lang\/js md\/nodejs\#[\d\.]+ (.*?)api\/(.+)\#[\d\.]+ (.*?)m\//,
        },
      });
      await client.getUserDetails({
        id: "my-id",
        userName: "my-username",
      });
    });
  });

  describe("features", () => {
    it("should detect DDB mapper, account id, and account id mode", async () => {
      const client = new DynamoDB({
        region: "us-west-2",
        accountIdEndpointMode: async () => "required" as const,
      });

      const doc = DynamoDBDocument.from(client);

      requireRequestsFrom(doc).toMatch({
        headers: {
          ["user-agent"](ua) {
            const metadata = ua.match(/(.*?) m\/(.*?)$/)[2];
            expect(metadata).toContain("d" as AwsSdkFeatures["DDB_MAPPER"]);
            expect(metadata).toContain("E" as AwsSdkFeatures["RETRY_MODE_STANDARD"]);
            expect(metadata).toContain("O" as AwsSdkFeatures["ACCOUNT_ID_ENDPOINT"]);
            expect(metadata).toContain("R" as AwsSdkFeatures["ACCOUNT_ID_MODE_REQUIRED"]);
          },
        },
      });

      client.config.credentials = async () => ({
        accessKeyId: "",
        secretAccessKey: "",
        accountId: "123456789012",
      });

      await doc.get({
        TableName: "table",
        Key: {
          id: "1",
        },
      });
    });
  });
});
