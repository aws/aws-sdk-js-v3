import { _BusinessReportRecurrence } from "./_BusinessReportRecurrence";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateBusinessReportScheduleInput: _Structure_ = {
  type: "structure",
  required: ["ScheduleArn"],
  members: {
    ScheduleArn: {
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
    ScheduleName: {
      shape: {
        type: "string"
      }
    },
    Recurrence: {
      shape: _BusinessReportRecurrence
    }
  }
};
