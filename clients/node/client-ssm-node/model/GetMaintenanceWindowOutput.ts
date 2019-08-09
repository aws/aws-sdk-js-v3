import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMaintenanceWindowOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowId: {
      shape: {
        type: "string",
        min: 20
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
    },
    StartDate: {
      shape: {
        type: "string"
      }
    },
    EndDate: {
      shape: {
        type: "string"
      }
    },
    Schedule: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScheduleTimezone: {
      shape: {
        type: "string"
      }
    },
    NextExecutionTime: {
      shape: {
        type: "string"
      }
    },
    Duration: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Cutoff: {
      shape: {
        type: "integer"
      }
    },
    AllowUnassociatedTargets: {
      shape: {
        type: "boolean"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    CreatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    ModifiedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
