import { _policyListType } from "./_policyListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPoliciesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Policies: {
      shape: _policyListType
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
