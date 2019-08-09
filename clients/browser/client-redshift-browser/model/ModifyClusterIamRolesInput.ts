import { _IamRoleArnList } from "./_IamRoleArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyClusterIamRolesInput: _Structure_ = {
  type: "structure",
  required: ["ClusterIdentifier"],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    AddIamRoles: {
      shape: _IamRoleArnList
    },
    RemoveIamRoles: {
      shape: _IamRoleArnList
    }
  }
};
