import { _policyDetailListType } from "./_policyDetailListType";
import { _attachedPoliciesListType } from "./_attachedPoliciesListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GroupDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GroupId: {
      shape: {
        type: "string",
        min: 16
      }
    },
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    },
    GroupPolicyList: {
      shape: _policyDetailListType
    },
    AttachedManagedPolicies: {
      shape: _attachedPoliciesListType
    }
  }
};
