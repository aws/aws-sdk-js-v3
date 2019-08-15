import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduledAuditMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    scheduledAuditName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    scheduledAuditArn: {
      shape: {
        type: "string"
      }
    },
    frequency: {
      shape: {
        type: "string"
      }
    },
    dayOfMonth: {
      shape: {
        type: "string"
      }
    },
    dayOfWeek: {
      shape: {
        type: "string"
      }
    }
  }
};
