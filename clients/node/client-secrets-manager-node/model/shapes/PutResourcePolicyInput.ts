import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutResourcePolicyInput: _Structure_ = {
  type: "structure",
  required: ["SecretId", "ResourcePolicy"],
  members: {
    SecretId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourcePolicy: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
