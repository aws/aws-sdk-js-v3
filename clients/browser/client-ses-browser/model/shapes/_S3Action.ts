import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Action: _Structure_ = {
  type: "structure",
  required: ["BucketName"],
  members: {
    TopicArn: {
      shape: {
        type: "string"
      }
    },
    BucketName: {
      shape: {
        type: "string"
      }
    },
    ObjectKeyPrefix: {
      shape: {
        type: "string"
      }
    },
    KmsKeyArn: {
      shape: {
        type: "string"
      }
    }
  }
};
