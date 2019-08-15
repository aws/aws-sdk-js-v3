import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachPolicyInput: _Structure_ = {
  type: "structure",
  required: ["policyName", "target"],
  members: {
    policyName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "policyName"
    },
    target: {
      shape: {
        type: "string"
      }
    }
  }
};
