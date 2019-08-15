import { _DirectoryIds } from "./_DirectoryIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDirectoriesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryIds: {
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
