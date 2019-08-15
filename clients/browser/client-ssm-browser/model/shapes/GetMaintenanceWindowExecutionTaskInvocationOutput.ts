import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMaintenanceWindowExecutionTaskInvocationOutput: _Structure_ = {
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
    InvocationId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    ExecutionId: {
      shape: {
        type: "string"
      }
    },
    TaskType: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: {
        type: "string",
        sensitive: true
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
    OwnerInformation: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    WindowTargetId: {
      shape: {
        type: "string"
      }
    }
  }
};
