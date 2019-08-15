import { _FilesMetadata } from "./_FilesMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCommitOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    commitId: {
      shape: {
        type: "string"
      }
    },
    treeId: {
      shape: {
        type: "string"
      }
    },
    filesAdded: {
      shape: _FilesMetadata
    },
    filesUpdated: {
      shape: _FilesMetadata
    },
    filesDeleted: {
      shape: _FilesMetadata
    }
  }
};
