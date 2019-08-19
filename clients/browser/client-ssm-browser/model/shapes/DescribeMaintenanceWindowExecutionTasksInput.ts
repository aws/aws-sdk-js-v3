import { _MaintenanceWindowFilterList } from "./_MaintenanceWindowFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMaintenanceWindowExecutionTasksInput: _Structure_ = {
  type: "structure",
  required: ["WindowExecutionId"],
  members: {
    WindowExecutionId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    Filters: {
      shape: _MaintenanceWindowFilterList
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 10
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
