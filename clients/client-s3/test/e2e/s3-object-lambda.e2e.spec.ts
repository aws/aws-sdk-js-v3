import { S3 } from "@aws-sdk/client-s3";
import { beforeAll, describe, expect, test as it } from "vitest";

import { getIntegTestResources } from "../../../../tests/e2e/get-integ-test-resources";

describe("S3 object lambda", () => {
  let client: S3;
  let Bucket: string;
  let region: string;

  beforeAll(async () => {
    const integTestResourcesEnv = await getIntegTestResources();
    Object.assign(process.env, integTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;
    Bucket = process?.env?.AWS_SMOKE_TEST_BUCKET as string;

    client = new S3({ region });
  });

  describe("CRUD operations", () => {
    it("should perform basic CRUD operations on objects", async () => {});
  });
}, 60_000);
