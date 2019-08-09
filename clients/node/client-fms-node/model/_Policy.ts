import { _SecurityServicePolicyData } from "./_SecurityServicePolicyData";
import { _ResourceTypeList } from "./_ResourceTypeList";
import { _ResourceTags } from "./_ResourceTags";
import { _CustomerPolicyScopeMap } from "./_CustomerPolicyScopeMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Policy: _Structure_ = {
  type: "structure",
  required: [
    "PolicyName",
    "SecurityServicePolicyData",
    "ResourceType",
    "ExcludeResourceTags",
    "RemediationEnabled"
  ],
  members: {
    PolicyId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    PolicyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyUpdateToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SecurityServicePolicyData: {
      shape: _SecurityServicePolicyData
    },
    ResourceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceTypeList: {
      shape: _ResourceTypeList
    },
    ResourceTags: {
      shape: _ResourceTags
    },
    ExcludeResourceTags: {
      shape: {
        type: "boolean"
      }
    },
    RemediationEnabled: {
      shape: {
        type: "boolean"
      }
    },
    IncludeMap: {
      shape: _CustomerPolicyScopeMap
    },
    ExcludeMap: {
      shape: _CustomerPolicyScopeMap
    }
  }
};
