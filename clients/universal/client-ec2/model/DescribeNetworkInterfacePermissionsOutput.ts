import { _NetworkInterfacePermissionList } from "./_NetworkInterfacePermissionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNetworkInterfacePermissionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkInterfacePermissions: {
      shape: _NetworkInterfacePermissionList,
      locationName: "networkInterfacePermissions"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
