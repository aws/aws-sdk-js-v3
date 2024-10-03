import { CodeCatalyst } from "@aws-sdk/client-codecatalyst";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { S3 } from "@aws-sdk/client-s3";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

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
    it("should detect DDB mapper, and account id mode", async () => {
      const client = new DynamoDB({
        credentials: {
          accessKeyId: "",
          secretAccessKey: "",
          accountId: "123",
        },
        accountIdEndpointMode: async () => "preferred" as const,
      });

      const doc = DynamoDBDocument.from(client);

      requireRequestsFrom(doc).toMatch({
        headers: {
          "user-agent": /(.*?) m\/d,P$/,
        },
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
