import { _Branches } from "./_Branches";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBranchesOutput: _Structure_ = {
  type: "structure",
  required: ["branches"],
  members: {
    branches: {
      shape: _Branches
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
