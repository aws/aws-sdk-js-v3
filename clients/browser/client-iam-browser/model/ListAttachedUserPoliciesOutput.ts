import { _attachedPoliciesListType } from "./_attachedPoliciesListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAttachedUserPoliciesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttachedPolicies: {
      shape: _attachedPoliciesListType
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
