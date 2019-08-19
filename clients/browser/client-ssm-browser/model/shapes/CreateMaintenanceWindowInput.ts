import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateMaintenanceWindowInput: _Structure_ = {
  type: "structure",
  required: [
    "Name",
    "Schedule",
    "Duration",
    "Cutoff",
    "AllowUnassociatedTargets"
  ],
  members: {
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
    ClientToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
