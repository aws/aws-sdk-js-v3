import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { CodeCatalyst } from "@aws-sdk/client-codecatalyst";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { S3 } from "@aws-sdk/client-s3";
import { fromTemporaryCredentials } from "@aws-sdk/credential-providers";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { STSClient } from "@aws-sdk/nested-clients/sts";
import { AwsSdkFeatures } from "@aws-sdk/types";
import { describe, expect, test as it, vi } from "vitest";

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
          "user-agent": /aws-sdk-js\/[\d.]+ (.*?)lang\/js md\/nodejs#[\d.]+ (.*?)api\/(.+)#[\d.]+ (.*?)m\//,
        },
      });
      await client.getUserDetails({
        id: "my-id",
        userName: "my-username",
      });
    });
  });

  describe("user agent customization", () => {
    it("should propagate the application id configuration to inner clients", async () => {
      const s3 = new S3({
        region: "us-west-2",
        credentials: fromTemporaryCredentials({
          masterCredentials: {
            accessKeyId: "my-access-key",
            secretAccessKey: "my-secretKey",
          },
          params: {
            RoleArn: "arn:aws:iam::1234567890:role/Rigmarole",
          },
        }),
        userAgentAppId: "widget-factory",
      });

      requireRequestsFrom(s3).toMatch({
        headers: {
          "user-agent": /app\/widget-factory$/,
        },
      });

      const actual = STSClient.prototype.send;
      vi.spyOn(STSClient.prototype, "send").mockImplementation(async function (this: STSClient, ...args) {
        if (this instanceof STSClient) {
          expect(await this.config.userAgentAppId()).toEqual("widget-factory");
          return {
            Credentials: {
              AccessKeyId: "A",
              SecretAccessKey: "S",
            },
          };
        }
        return actual.bind(this)(...args);
      });

      await s3.listBuckets();

      expect.assertions(2);
    });

    it("should allow characters from the set !#$%&'*+-.^_`|~[0-9][A-Za-z]", async () => {
      const s3 = new S3({
        region: "us-west-2",
        userAgentAppId: "!#$%&'*+-.^_`|~abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      });

      requireRequestsFrom(s3).toMatch({
        headers: {
          "user-agent": /app\/!#\$%&'\*\+-\.\^_`\|~abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$/,
        },
      });

      await s3.listBuckets();

      expect.hasAssertions();
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
