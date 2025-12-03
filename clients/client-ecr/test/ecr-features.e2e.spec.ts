import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { ECR } from "@aws-sdk/client-ecr";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Amazon EC2 Container Registry Features", () => {
  let client: ECR;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new ECR({ region });
  });

  describe("Making a request", () => {
    it("should successfully describe repositories", async () => {
      const result = await client.describeRepositories({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.repositories)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain repository not found error for fake repository name", async () => {
      await expect(
        client.listImages({
          repositoryName: "fake_name",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "RepositoryNotFoundException",
        })
      );
    });
  });
});
