import { _NetworkInterfacePermissionIdList } from "./_NetworkInterfacePermissionIdList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNetworkInterfacePermissionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NetworkInterfacePermissionIds: {
      shape: _NetworkInterfacePermissionIdList,
      locationName: "NetworkInterfacePermissionId"
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    }
  }
};
