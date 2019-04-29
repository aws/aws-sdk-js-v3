import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDefaultBranchInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName", "defaultBranchName"],
  members: {
    repositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    defaultBranchName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
