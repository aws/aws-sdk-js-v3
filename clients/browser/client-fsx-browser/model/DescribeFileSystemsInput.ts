import { _FileSystemIds } from "./_FileSystemIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFileSystemsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FileSystemIds: {
      shape: _FileSystemIds
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
