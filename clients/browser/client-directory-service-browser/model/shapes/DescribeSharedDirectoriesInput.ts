import { _DirectoryIds } from "./_DirectoryIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSharedDirectoriesInput: _Structure_ = {
  type: "structure",
  required: ["OwnerDirectoryId"],
  members: {
    OwnerDirectoryId: {
      shape: {
        type: "string"
      }
    },
    SharedDirectoryIds: {
      shape: _DirectoryIds
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Limit: {
      shape: {
        type: "integer"
      }
    }
  }
};
