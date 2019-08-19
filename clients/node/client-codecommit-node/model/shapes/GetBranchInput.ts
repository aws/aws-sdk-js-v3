import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBranchInput: _Structure_ = {
  type: "structure",
  required: [],
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
    }
  }
};
