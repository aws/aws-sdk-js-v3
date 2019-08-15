import { _PolicyGroupListType } from "./_PolicyGroupListType";
import { _PolicyUserListType } from "./_PolicyUserListType";
import { _PolicyRoleListType } from "./_PolicyRoleListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEntitiesForPolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyGroups: {
      shape: _PolicyGroupListType
    },
    PolicyUsers: {
      shape: _PolicyUserListType
    },
    PolicyRoles: {
      shape: _PolicyRoleListType
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
