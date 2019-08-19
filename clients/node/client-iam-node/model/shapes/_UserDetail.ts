import { _policyDetailListType } from "./_policyDetailListType";
import { _groupNameListType } from "./_groupNameListType";
import { _attachedPoliciesListType } from "./_attachedPoliciesListType";
import { _AttachedPermissionsBoundary } from "./_AttachedPermissionsBoundary";
import { _tagListType } from "./_tagListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserId: {
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
    UserPolicyList: {
      shape: _policyDetailListType
    },
    GroupList: {
      shape: _groupNameListType
    },
    AttachedManagedPolicies: {
      shape: _attachedPoliciesListType
    },
    PermissionsBoundary: {
      shape: _AttachedPermissionsBoundary
    },
    Tags: {
      shape: _tagListType
    }
  }
};
