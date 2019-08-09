import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLifecyclePolicyInput: _Structure_ = {
  type: "structure",
  required: ["PolicyId"],
  members: {
    PolicyId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "policyId"
    }
  }
};
