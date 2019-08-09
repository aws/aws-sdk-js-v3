import { _DirectoryIdList } from "./_DirectoryIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWorkspaceDirectoriesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryIds: {
      shape: _DirectoryIdList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
