import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { CloudWatchClient } from "@aws-sdk/client-cloudwatch";
import { DynamoDB, GetItemInput$ } from "@aws-sdk/client-dynamodb";
import { S3 } from "@aws-sdk/client-s3";
import { fromIni } from "@aws-sdk/config/credentials";
import { type Logger, LogLevel } from "@aws-sdk/config/logger";
import { AwsRestXmlProtocol, AwsSmithyRpcV2CborProtocol } from "@aws-sdk/config/protocol";
import { FetchHttpHandler, NodeHttpHandler } from "@aws-sdk/config/requestHandler";
import { ConfiguredRetryStrategy } from "@aws-sdk/config/retryStrategy";
import { getRuntimeTypecheckPlugin, validateSchema } from "@aws-sdk/config/typecheck";
import { HttpResponse } from "@smithy/protocol-http";
import { describe, expect, test as it, vi } from "vitest";

describe("@aws-sdk/config", () => {
  describe("credentials", () => {
    it("should re-export providers", async () => {
      const {
        fromCognitoIdentity,
        fromCognitoIdentityPool,
        fromContainerMetadata,
        fromEnv,
        fromHttp,
        fromIni,
        fromInstanceMetadata,
        fromLoginCredentials,
        fromNodeProviderChain,
        fromProcess,
        fromSSO,
        fromTemporaryCredentials,
        fromTokenFile,
        fromWebToken,
      } = await import("@aws-sdk/config/credentials");
      const providers = [
        fromCognitoIdentity,
        fromCognitoIdentityPool,
        fromContainerMetadata,
        fromEnv,
        fromHttp,
        fromIni,
        fromInstanceMetadata,
        fromLoginCredentials,
        fromNodeProviderChain,
        fromProcess,
        fromSSO,
        fromTemporaryCredentials,
        fromTokenFile,
        fromWebToken,
      ];
      for (const provider of providers) {
        expect(provider).toBeInstanceOf(Function);
      }
    });

    it("should accept fromIni credentials provider", async () => {
      const client = new S3({
        credentials: fromIni(),
        region: "us-west-2",
      });
      expect(client).toBeDefined();
      client.destroy();
    });
  });

  describe("logger", () => {
    it("LogLevel should filter logger calls", async () => {
      const makeLogger = () =>
        ({
          trace: vi.fn(),
          debug: vi.fn(),
          info: vi.fn(),
          warn: vi.fn(),
          error: vi.fn(),
        } as Logger);

      {
        const logger = makeLogger();
        const client = new S3({
          logger: new LogLevel("debug", logger),
          region: "us-west-2",
          credentials: {
            accessKeyId: "TEST",
            secretAccessKey: "TEST",
          },
        });

        requireRequestsFrom(client)
          .toMatch({ hostname: /s3/ })
          .respondWith(
            new HttpResponse({
              statusCode: 400,
              body: "",
            })
          );
        await client.listBuckets().catch(() => {});
        expect(logger.debug).toHaveBeenCalled();
        expect(logger.error).toHaveBeenCalled();
      }

      {
        const logger = makeLogger();
        const client = new S3({
          logger: new LogLevel("info", logger),
          region: "us-west-2",
          credentials: {
            accessKeyId: "TEST",
            secretAccessKey: "TEST",
          },
        });

        requireRequestsFrom(client)
          .toMatch({ hostname: /s3/ })
          .respondWith(
            new HttpResponse({
              statusCode: 400,
              body: "",
            })
          );
        await client.listBuckets().catch(() => {});
        expect(logger.debug).not.toHaveBeenCalled();
        expect(logger.error).toHaveBeenCalled();
      }
    });
  });

  describe("protocol", () => {
    it("should accept AwsSmithyRpcV2CborProtocol", async () => {
      const client = new CloudWatchClient({
        protocol: AwsSmithyRpcV2CborProtocol,
        region: "us-west-2",
      });
      expect(client).toBeDefined();
    });

    it("should accept extended AwsRestXmlProtocol", async () => {
      const client = new S3({
        protocol: class extends AwsRestXmlProtocol {},
        region: "us-west-2",
      });
      expect(client).toBeDefined();
    });

    it("exports all AWS protocols except EC2", async () => {
      const {
        AwsQueryProtocol,
        AwsJson1_0Protocol,
        AwsJson1_1Protocol,
        AwsRestJsonProtocol,
        AwsRestXmlProtocol,
        AwsSmithyRpcV2CborProtocol,
        AwsJsonRpcProtocol,
        HttpProtocol,
        HttpBindingProtocol,
        RpcProtocol,
      } = await import("@aws-sdk/config/protocol");
      for (const c of [
        AwsQueryProtocol,
        AwsJson1_0Protocol,
        AwsJson1_1Protocol,
        AwsRestJsonProtocol,
        AwsRestXmlProtocol,
        AwsSmithyRpcV2CborProtocol,
        AwsJsonRpcProtocol,
        HttpProtocol,
        HttpBindingProtocol,
        RpcProtocol,
      ]) {
        expect(c).toBeInstanceOf(Function);
      }
    });
  });

  describe("requestHandler", () => {
    it("should accept extended NodeHttpHandler", async () => {
      const client = new S3({
        requestHandler: new (class extends NodeHttpHandler {
          async handle(request: any) {
            return super.handle(request);
          }
        })(),
        region: "us-west-2",
      });
      expect(client).toBeDefined();
      client.destroy();
    });

    it("should accept FetchHttpHandler", async () => {
      const client = new S3({
        requestHandler: new FetchHttpHandler(),
        region: "us-west-2",
      });
      expect(client).toBeDefined();
      client.destroy();
    });

    it("exports HttpRequest and HttpResponse classes", async () => {
      const { HttpRequest, HttpResponse } = await import("@aws-sdk/config/requestHandler");
      expect(HttpRequest).toBeInstanceOf(Function);
      expect(HttpResponse).toBeInstanceOf(Function);
    });
  });

  describe("retryStrategy", () => {
    it("should accept ConfiguredRetryStrategy with custom backoff", async () => {
      const client = new S3({
        retryStrategy: new ConfiguredRetryStrategy(5, (attempt: number) => 500 + attempt * 1_000),
        region: "us-west-2",
      });
      expect(client).toBeDefined();
    });

    it("exports StandardRetryStrategy and AdaptiveRetryStrategy as classes", async () => {
      const { StandardRetryStrategy, AdaptiveRetryStrategy } = await import("@aws-sdk/config/retryStrategy");
      expect(StandardRetryStrategy).toBeInstanceOf(Function);
      expect(AdaptiveRetryStrategy).toBeInstanceOf(Function);
    });
  });

  describe("typecheck", () => {
    it("should validate schema with validateSchema", () => {
      const errors = validateSchema(GetItemInput$, {
        Key: {
          id: {
            S: new Date("wrong type"),
          },
        },
      });
      expect(errors).toEqual(["{}.TableName: is required.", '{}.Key["id"].S: expected string, got object.']);
    });

    it("should work with getRuntimeTypecheckPlugin", async () => {
      const ddb = new DynamoDB({
        credentials: { accessKeyId: "TEST", secretAccessKey: "TEST" },
        region: "us-west-2",
      });

      requireRequestsFrom(ddb)
        .toMatch({ hostname: /dynamodb/ })
        .respondWith(
          new HttpResponse({
            statusCode: 200,
            headers: {},
            body: Buffer.from(JSON.stringify({ Item: {} })),
          })
        );

      ddb.middlewareStack.use(
        getRuntimeTypecheckPlugin({
          input: "throw",
        })
      );

      const error = await ddb
        .getItem({
          TableName: undefined as any,
          Key: {
            id: {
              S: new Date("wrong type") as any,
            },
          },
        })
        .catch((e) => e);

      expect(error.name).toEqual("Error");
      expect(error.message).toEqual(
        "DynamoDBClient->GetItemCommand input validation: \n" +
          "\t{}.TableName: is required.\n" +
          `\t{}.Key["id"].S: expected string, got object.`
      );
    });
  });
});
