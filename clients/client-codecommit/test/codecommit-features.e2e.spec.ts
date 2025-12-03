import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { CodeCommit, RepositoryDoesNotExistException } from "@aws-sdk/client-codecommit";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("AWS CodeCommit Features", () => {
  let client: CodeCommit;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new CodeCommit({ region });
  });

  describe("List repositories", () => {
    it("should successfully list repositories", async () => {
      const result = await client.listRepositories({});
      expect(Array.isArray(result.repositories)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should throw RepositoryDoesNotExistException for fake repository", async () => {
      await expect(client.listBranches({ repositoryName: "fake-repo" })).rejects.toThrow(
        RepositoryDoesNotExistException
      );
    });
  });
});
