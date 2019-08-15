import { _instanceProfileListType } from "./_instanceProfileListType";
import { _policyDetailListType } from "./_policyDetailListType";
import { _attachedPoliciesListType } from "./_attachedPoliciesListType";
import { _AttachedPermissionsBoundary } from "./_AttachedPermissionsBoundary";
import { _tagListType } from "./_tagListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RoleDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleId: {
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
    AssumeRolePolicyDocument: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InstanceProfileList: {
      shape: _instanceProfileListType
    },
    RolePolicyList: {
      shape: _policyDetailListType
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
