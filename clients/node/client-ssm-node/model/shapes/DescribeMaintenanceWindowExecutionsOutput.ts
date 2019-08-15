import { _MaintenanceWindowExecutionList } from "./_MaintenanceWindowExecutionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMaintenanceWindowExecutionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowExecutions: {
      shape: _MaintenanceWindowExecutionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
