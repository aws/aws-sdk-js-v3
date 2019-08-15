import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachPrincipalPolicyInput: _Structure_ = {
  type: "structure",
  required: ["policyName", "principal"],
  members: {
    policyName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "policyName"
    },
    principal: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amzn-iot-principal"
    }
  }
};
