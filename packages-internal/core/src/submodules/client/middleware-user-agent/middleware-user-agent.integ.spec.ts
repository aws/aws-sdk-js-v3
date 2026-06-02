import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { CodeCatalyst } from "@aws-sdk/client-codecatalyst";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { S3 } from "@aws-sdk/client-s3";
import { fromTemporaryCredentials } from "@aws-sdk/credential-providers";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import type { AwsSdkFeatures } from "@aws-sdk/types";
import { Readable } from "node:stream";
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
      let stsUserAgent = "";

      const s3 = new S3({
        region: "us-west-2",
        credentials: fromTemporaryCredentials({
          masterCredentials: {
            accessKeyId: "my-access-key",
            secretAccessKey: "my-secretKey",
          },
          clientConfig: {
            region: "us-west-2",
            requestHandler: {
              async handle(request: any) {
                stsUserAgent = request.headers["user-agent"] ?? "";
                return {
                  response: {
                    statusCode: 200,
                    headers: { "content-type": "text/xml" },
                    body: Readable.from(`<AssumeRoleResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
                      <AssumeRoleResult>
                        <Credentials>
                          <AccessKeyId>A</AccessKeyId>
                          <SecretAccessKey>S</SecretAccessKey>
                          <SessionToken>T</SessionToken>
                          <Expiration>2099-01-01T00:00:00Z</Expiration>
                        </Credentials>
                      </AssumeRoleResult>
                    </AssumeRoleResponse>`),
                  },
                };
              },
              metadata: { handlerProtocol: "" },
              updateHttpClientConfig() {},
              httpHandlerConfigs() {
                return {};
              },
            },
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

      await s3.listBuckets();

      expect(stsUserAgent).toMatch(/app\/widget-factory$/);
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
