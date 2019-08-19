import { _TargetAuditCheckNames } from "./_TargetAuditCheckNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScheduledAuditOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    },
    targetCheckNames: {
      shape: _TargetAuditCheckNames
    },
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
    }
  }
};
