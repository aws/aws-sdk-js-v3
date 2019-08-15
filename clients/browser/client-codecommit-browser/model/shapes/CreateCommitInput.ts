import { _PutFileEntries } from "./_PutFileEntries";
import { _DeleteFileEntries } from "./_DeleteFileEntries";
import { _SetFileModeEntries } from "./_SetFileModeEntries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCommitInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName", "branchName"],
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
    parentCommitId: {
      shape: {
        type: "string"
      }
    },
    authorName: {
      shape: {
        type: "string"
      }
    },
    email: {
      shape: {
        type: "string"
      }
    },
    commitMessage: {
      shape: {
        type: "string"
      }
    },
    keepEmptyFolders: {
      shape: {
        type: "boolean"
      }
    },
    putFiles: {
      shape: _PutFileEntries
    },
    deleteFiles: {
      shape: _DeleteFileEntries
    },
    setFileModes: {
      shape: _SetFileModeEntries
    }
  }
};
