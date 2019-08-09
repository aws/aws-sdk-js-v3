import { _BranchNameList } from "./_BranchNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBranchesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    branches: {
      shape: _BranchNameList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
