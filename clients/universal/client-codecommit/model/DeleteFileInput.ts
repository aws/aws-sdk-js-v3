import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteFileInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName", "branchName", "filePath", "parentCommitId"],
  members: {
    repositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    branchName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    filePath: {
      shape: {
        type: "string"
      }
    },
    parentCommitId: {
      shape: {
        type: "string"
      }
    },
    keepEmptyFolders: {
      shape: {
        type: "boolean"
      }
    },
    commitMessage: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    email: {
      shape: {
        type: "string"
      }
    }
  }
};
