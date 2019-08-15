import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetachPolicyInput: _Structure_ = {
  type: "structure",
  required: ["PolicyId", "TargetId"],
  members: {
    PolicyId: {
      shape: {
        type: "string"
      }
    },
    TargetId: {
      shape: {
        type: "string"
      }
    }
  }
};
