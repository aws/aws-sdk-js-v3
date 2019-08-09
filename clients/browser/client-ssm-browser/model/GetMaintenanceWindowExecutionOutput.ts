import { _MaintenanceWindowExecutionTaskIdList } from "./_MaintenanceWindowExecutionTaskIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMaintenanceWindowExecutionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowExecutionId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    TaskIds: {
      shape: _MaintenanceWindowExecutionTaskIdList
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusDetails: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
