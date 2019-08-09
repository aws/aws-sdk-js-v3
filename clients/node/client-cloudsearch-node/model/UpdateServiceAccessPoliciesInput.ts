import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateServiceAccessPoliciesInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "AccessPolicies"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    AccessPolicies: {
      shape: {
        type: "string"
      }
    }
  }
};
