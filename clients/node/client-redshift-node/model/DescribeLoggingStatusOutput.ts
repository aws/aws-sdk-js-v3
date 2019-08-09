import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoggingStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoggingEnabled: {
      shape: {
        type: "boolean"
      }
    },
    BucketName: {
      shape: {
        type: "string"
      }
    },
    S3KeyPrefix: {
      shape: {
        type: "string"
      }
    },
    LastSuccessfulDeliveryTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastFailureTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastFailureMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
