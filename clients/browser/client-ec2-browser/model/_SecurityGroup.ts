import { _IpPermissionList } from "./_IpPermissionList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SecurityGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "groupDescription"
    },
    GroupName: {
      shape: {
        type: "string"
      },
      locationName: "groupName"
    },
    IpPermissions: {
      shape: _IpPermissionList,
      locationName: "ipPermissions"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    },
    GroupId: {
      shape: {
        type: "string"
      },
      locationName: "groupId"
    },
    IpPermissionsEgress: {
      shape: _IpPermissionList,
      locationName: "ipPermissionsEgress"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    }
  }
};
