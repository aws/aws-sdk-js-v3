import { _Targets } from "./_Targets";
import { _MaintenanceWindowTaskParameters } from "./_MaintenanceWindowTaskParameters";
import { _LoggingInfo } from "./_LoggingInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MaintenanceWindowTask: _Structure_ = {
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
    TaskArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Targets: {
      shape: _Targets
    },
    TaskParameters: {
      shape: _MaintenanceWindowTaskParameters
    },
    Priority: {
      shape: {
        type: "integer"
      }
    },
    LoggingInfo: {
      shape: _LoggingInfo
    },
    ServiceRoleArn: {
      shape: {
        type: "string"
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
