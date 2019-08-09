import { _LastReportGenerationExecutionErrors } from "./_LastReportGenerationExecutionErrors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UsageReportSubscription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3BucketName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Schedule: {
      shape: {
        type: "string"
      }
    },
    LastGeneratedReportDate: {
      shape: {
        type: "timestamp"
      }
    },
    SubscriptionErrors: {
      shape: _LastReportGenerationExecutionErrors
    }
  }
};
