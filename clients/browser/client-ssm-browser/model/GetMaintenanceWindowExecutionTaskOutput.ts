import { _MaintenanceWindowTaskParametersList } from "./_MaintenanceWindowTaskParametersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMaintenanceWindowExecutionTaskOutput: _Structure_ = {
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
    TaskArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceRole: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    TaskParameters: {
      shape: _MaintenanceWindowTaskParametersList
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
