import { _MaintenanceWindowExecutionTaskInvocationIdentityList } from "./_MaintenanceWindowExecutionTaskInvocationIdentityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMaintenanceWindowExecutionTaskInvocationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowExecutionTaskInvocationIdentities: {
      shape: _MaintenanceWindowExecutionTaskInvocationIdentityList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
