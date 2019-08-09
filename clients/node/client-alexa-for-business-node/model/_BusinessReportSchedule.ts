import { _BusinessReportContentRange } from "./_BusinessReportContentRange";
import { _BusinessReportRecurrence } from "./_BusinessReportRecurrence";
import { _BusinessReport } from "./_BusinessReport";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BusinessReportSchedule: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScheduleArn: {
      shape: {
        type: "string"
      }
    },
    ScheduleName: {
      shape: {
        type: "string"
      }
    },
    S3BucketName: {
      shape: {
        type: "string"
      }
    },
    S3KeyPrefix: {
      shape: {
        type: "string"
      }
    },
    Format: {
      shape: {
        type: "string"
      }
    },
    ContentRange: {
      shape: _BusinessReportContentRange
    },
    Recurrence: {
      shape: _BusinessReportRecurrence
    },
    LastBusinessReport: {
      shape: _BusinessReport
    }
  }
};
