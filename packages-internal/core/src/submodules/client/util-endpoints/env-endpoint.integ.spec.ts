import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { S3 } from "@aws-sdk/client-s3";
import { afterAll, beforeEach, describe, test as it } from "vitest";

/**
 * This is an AWS-specific integration test for a piece of functionality that is contained
 * within `@smithy/middleware-endpoint` (another repository).
 *
 * It augments unit tests in that package.
 */
describe("environment variable custom endpoint", () => {
  beforeEach(async () => {
    delete process.env.AWS_ENDPOINT_URL;
    delete process.env.AWS_ENDPOINT_URL_DYNAMODB;
  });

  afterAll(async () => {
    delete process.env.AWS_ENDPOINT_URL;
    delete process.env.AWS_ENDPOINT_URL_DYNAMODB;
  });

  it("should override a client endpoint if none is set on the client", async () => {
    process.env.AWS_ENDPOINT_URL = "https://localhost/1";
    const s3 = new S3({
      region: "us-west-2",
    });
    const ddb = new DynamoDB({
      region: "us-west-2",
    });

    requireRequestsFrom(s3).toMatch({
      hostname: /localhost/,
      path: /\/1/,
    });
    requireRequestsFrom(ddb).toMatch({
      hostname: /localhost/,
      path: /\/1/,
    });

    await s3.listBuckets();
    await ddb.listTables();
  });

  it("should defer to the client's manually set endpoint", async () => {
    process.env.AWS_ENDPOINT_URL = "https://localhost/1";
    const s3 = new S3({
      region: "us-west-2",
      endpoint: "https://localhost/2",
    });
    const ddb = new DynamoDB({
      region: "us-west-2",
      endpoint: "https://localhost/2",
    });

    requireRequestsFrom(s3).toMatch({
      hostname: /localhost/,
      path: /\/2/,
    });
    requireRequestsFrom(ddb).toMatch({
      hostname: /localhost/,
      path: /\/2/,
    });

    await s3.listBuckets();
    await ddb.listTables();
  });

  it("should allow a specific service id to be chosen in the env variable name", async () => {
    process.env.AWS_ENDPOINT_URL_DYNAMODB = "https://localhost/1";
    const s3 = new S3({
      region: "us-west-2",
    });
    const ddb = new DynamoDB({
      region: "us-west-2",
    });

    requireRequestsFrom(s3).toMatch({
      hostname: /s3\.us-west-2\.amazonaws\.com/,
    });
    requireRequestsFrom(ddb).toMatch({
      hostname: /localhost/,
      path: /\/1/,
    });

    await s3.listBuckets();
    await ddb.listTables();
  });
});
