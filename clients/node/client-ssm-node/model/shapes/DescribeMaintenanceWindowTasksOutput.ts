import { _MaintenanceWindowTaskList } from "./_MaintenanceWindowTaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMaintenanceWindowTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Tasks: {
      shape: _MaintenanceWindowTaskList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
