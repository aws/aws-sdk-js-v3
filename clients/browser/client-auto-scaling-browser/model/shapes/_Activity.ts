import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Activity: _Structure_ = {
  type: "structure",
  required: [
    "ActivityId",
    "AutoScalingGroupName",
    "Cause",
    "StartTime",
    "StatusCode"
  ],
  members: {
    ActivityId: {
      shape: {
        type: "string"
      }
    },
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Cause: {
      shape: {
        type: "string",
        min: 1
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
    StatusCode: {
      shape: {
        type: "string"
      }
    },
    StatusMessage: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Progress: {
      shape: {
        type: "integer"
      }
    },
    Details: {
      shape: {
        type: "string"
      }
    }
  }
};
