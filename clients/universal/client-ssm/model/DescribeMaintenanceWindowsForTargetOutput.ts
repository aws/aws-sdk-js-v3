import { _MaintenanceWindowsForTargetList } from "./_MaintenanceWindowsForTargetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMaintenanceWindowsForTargetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowIdentities: {
      shape: _MaintenanceWindowsForTargetList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
