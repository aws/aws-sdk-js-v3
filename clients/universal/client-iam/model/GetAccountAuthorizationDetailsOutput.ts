import { _userDetailListType } from "./_userDetailListType";
import { _groupDetailListType } from "./_groupDetailListType";
import { _roleDetailListType } from "./_roleDetailListType";
import { _ManagedPolicyDetailListType } from "./_ManagedPolicyDetailListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAccountAuthorizationDetailsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserDetailList: {
      shape: _userDetailListType
    },
    GroupDetailList: {
      shape: _groupDetailListType
    },
    RoleDetailList: {
      shape: _roleDetailListType
    },
    Policies: {
      shape: _ManagedPolicyDetailListType
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
