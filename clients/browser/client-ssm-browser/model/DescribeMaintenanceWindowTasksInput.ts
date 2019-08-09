import { _MaintenanceWindowFilterList } from "./_MaintenanceWindowFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMaintenanceWindowTasksInput: _Structure_ = {
  type: "structure",
  required: ["WindowId"],
  members: {
    WindowId: {
      shape: {
        type: "string",
        min: 20
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
