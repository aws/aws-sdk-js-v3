import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MaintenanceWindowExecutionTaskIdentity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowExecutionId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    TaskExecutionId: {
      shape: {
        type: "string",
        min: 36
      }
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
    },
    TaskArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TaskType: {
      shape: {
        type: "string"
      }
    }
  }
};
