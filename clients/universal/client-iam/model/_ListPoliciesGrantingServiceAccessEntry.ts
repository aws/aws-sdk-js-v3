import { _policyGrantingServiceAccessListType } from "./_policyGrantingServiceAccessListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ListPoliciesGrantingServiceAccessEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServiceNamespace: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Policies: {
      shape: _policyGrantingServiceAccessListType
    }
  }
};
