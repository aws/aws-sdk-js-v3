import { _MaintenanceWindowTargetList } from "./_MaintenanceWindowTargetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMaintenanceWindowTargetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Targets: {
      shape: _MaintenanceWindowTargetList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
