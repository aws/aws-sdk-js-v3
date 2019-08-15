import { _BusinessReportContentRange } from "./_BusinessReportContentRange";
import { _BusinessReportRecurrence } from "./_BusinessReportRecurrence";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBusinessReportScheduleInput: _Structure_ = {
  type: "structure",
  required: ["Format", "ContentRange"],
  members: {
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
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 10
      }
    }
  }
};
