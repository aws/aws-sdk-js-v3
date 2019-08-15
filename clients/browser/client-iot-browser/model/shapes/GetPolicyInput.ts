import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPolicyInput: _Structure_ = {
  type: "structure",
  required: ["policyName"],
  members: {
    policyName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "policyName"
    }
  }
};
