import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUsageReportSubscriptionOutput: _Structure_ = {
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
    }
  }
};
