import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MaintenanceWindowIdentity: _Structure_ = {
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
    Enabled: {
      shape: {
        type: "boolean"
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
    EndDate: {
      shape: {
        type: "string"
      }
    },
    StartDate: {
      shape: {
        type: "string"
      }
    },
    NextExecutionTime: {
      shape: {
        type: "string"
      }
    }
  }
};
