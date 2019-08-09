import { _DirectoryNameList } from "./_DirectoryNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDirectoryConfigsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryNames: {
      shape: _DirectoryNameList
    },
    MaxResults: {
      shape: {
        type: "integer"
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
