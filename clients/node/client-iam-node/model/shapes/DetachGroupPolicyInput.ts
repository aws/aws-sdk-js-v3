import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachGroupPolicyInput: _Structure_ = {
  type: "structure",
  required: ["GroupName", "PolicyArn"],
  members: {
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
