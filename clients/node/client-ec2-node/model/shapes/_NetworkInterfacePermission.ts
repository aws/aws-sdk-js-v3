import { _NetworkInterfacePermissionState } from "./_NetworkInterfacePermissionState";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkInterfacePermission: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkInterfacePermissionId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfacePermissionId"
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    },
    AwsAccountId: {
      shape: {
        type: "string"
      },
      locationName: "awsAccountId"
    },
    AwsService: {
      shape: {
        type: "string"
      },
      locationName: "awsService"
    },
    Permission: {
      shape: {
        type: "string"
      },
      locationName: "permission"
    },
    PermissionState: {
      shape: _NetworkInterfacePermissionState,
      locationName: "permissionState"
    }
  }
};
