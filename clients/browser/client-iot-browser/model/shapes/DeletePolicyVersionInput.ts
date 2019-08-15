import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeletePolicyVersionInput: _Structure_ = {
  type: "structure",
  required: ["policyName", "policyVersionId"],
  members: {
    policyName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "policyName"
    },
    policyVersionId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "policyVersionId"
    }
  }
};
