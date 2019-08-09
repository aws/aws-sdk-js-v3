import { _listPolicyGrantingServiceAccessResponseListType } from "./_listPolicyGrantingServiceAccessResponseListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPoliciesGrantingServiceAccessOutput: _Structure_ = {
  type: "structure",
  required: ["PoliciesGrantingServiceAccess"],
  members: {
    PoliciesGrantingServiceAccess: {
      shape: _listPolicyGrantingServiceAccessResponseListType
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
