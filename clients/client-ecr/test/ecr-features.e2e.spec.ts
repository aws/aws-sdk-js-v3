import { ECR } from "@aws-sdk/client-ecr";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(ECR.name, () => {
  let client: ECR;

  beforeAll(async () => {
    client = new ECR({ region: "us-west-2" });
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
