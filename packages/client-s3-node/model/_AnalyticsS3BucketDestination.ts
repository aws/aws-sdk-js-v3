import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AnalyticsS3BucketDestination: _Structure_ = {
  type: "structure",
  required: ["Format", "Bucket"],
  members: {
    Format: {
      shape: {
        type: "string"
      }
    },
    BucketAccountId: {
      shape: {
        type: "string"
      }
    },
    Bucket: {
      shape: {
        type: "string"
      }
    },
    Prefix: {
      shape: {
        type: "string"
      }
    }
  }
};
