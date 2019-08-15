import { _Targets } from "./_Targets";
import { _MaintenanceWindowTaskParameters } from "./_MaintenanceWindowTaskParameters";
import { _MaintenanceWindowTaskInvocationParameters } from "./_MaintenanceWindowTaskInvocationParameters";
import { _LoggingInfo } from "./_LoggingInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMaintenanceWindowTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowId: {
      shape: {
        type: "string",
        min: 20
      }
    },
    WindowTaskId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    Targets: {
      shape: _Targets
    },
    TaskArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceRoleArn: {
      shape: {
        type: "string"
      }
    },
    TaskType: {
      shape: {
        type: "string"
      }
    },
    TaskParameters: {
      shape: _MaintenanceWindowTaskParameters
    },
    TaskInvocationParameters: {
      shape: _MaintenanceWindowTaskInvocationParameters
    },
    Priority: {
      shape: {
        type: "integer"
      }
    },
    MaxConcurrency: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxErrors: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LoggingInfo: {
      shape: _LoggingInfo
    },
    Name: {
      shape: {
        type: "string",
        min: 3
      }
    },
    Description: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    }
  }
};
