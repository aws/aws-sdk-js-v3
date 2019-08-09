import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePolicyInput: _Structure_ = {
  type: "structure",
  required: ["policyName", "policyDocument"],
  members: {
    policyName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "policyName"
    },
    policyDocument: {
      shape: {
        type: "string"
      }
    }
  }
};
