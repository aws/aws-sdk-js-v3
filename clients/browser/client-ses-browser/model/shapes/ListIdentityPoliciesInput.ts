import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListIdentityPoliciesInput: _Structure_ = {
  type: "structure",
  required: ["Identity"],
  members: {
    Identity: {
      shape: {
        type: "string"
      }
    }
  }
};
