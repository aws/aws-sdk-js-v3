import { CodeCommit, RepositoryDoesNotExistException } from "@aws-sdk/client-codecommit";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(CodeCommit.name, () => {
  let client: CodeCommit;

  beforeAll(async () => {
    client = new CodeCommit({ region: "us-west-2" });
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
