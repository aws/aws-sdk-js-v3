import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachUserPolicyInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "PolicyArn"],
  members: {
    UserName: {
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
