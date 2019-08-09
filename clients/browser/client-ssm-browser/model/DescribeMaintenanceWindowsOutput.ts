import { _MaintenanceWindowIdentityList } from "./_MaintenanceWindowIdentityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMaintenanceWindowsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowIdentities: {
      shape: _MaintenanceWindowIdentityList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
