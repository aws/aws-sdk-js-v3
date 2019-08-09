import { _MaintenanceWindowExecutionTaskIdentityList } from "./_MaintenanceWindowExecutionTaskIdentityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMaintenanceWindowExecutionTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowExecutionTaskIdentities: {
      shape: _MaintenanceWindowExecutionTaskIdentityList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
