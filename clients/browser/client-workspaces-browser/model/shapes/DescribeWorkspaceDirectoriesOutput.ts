import { _DirectoryList } from "./_DirectoryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWorkspaceDirectoriesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Directories: {
      shape: _DirectoryList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
