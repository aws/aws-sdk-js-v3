import { _StaleIpPermissionSet } from "./_StaleIpPermissionSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StaleSecurityGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    GroupId: {
      shape: {
        type: "string"
      },
      locationName: "groupId"
    },
    GroupName: {
      shape: {
        type: "string"
      },
      locationName: "groupName"
    },
    StaleIpPermissions: {
      shape: _StaleIpPermissionSet,
      locationName: "staleIpPermissions"
    },
    StaleIpPermissionsEgress: {
      shape: _StaleIpPermissionSet,
      locationName: "staleIpPermissionsEgress"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    }
  }
};
