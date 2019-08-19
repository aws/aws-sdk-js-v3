import { Structure as _Structure_ } from "@aws-sdk/types";

export const EnableLoggingInput: _Structure_ = {
  type: "structure",
  required: ["ClusterIdentifier", "BucketName"],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
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
    }
  }
};
