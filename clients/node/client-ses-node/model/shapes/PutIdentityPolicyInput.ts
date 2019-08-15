import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutIdentityPolicyInput: _Structure_ = {
  type: "structure",
  required: ["Identity", "PolicyName", "Policy"],
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
    },
    Policy: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
