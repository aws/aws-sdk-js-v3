import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteIdentityPolicyInput: _Structure_ = {
  type: "structure",
  required: ["Identity", "PolicyName"],
  members: {
    Identity: {
      shape: {
        type: "string"
      }
    },
    PolicyName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
