import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Action: _Structure_ = {
  type: "structure",
  required: ["roleArn", "bucketName", "key"],
  members: {
    roleArn: {
      shape: {
        type: "string"
      }
    },
    bucketName: {
      shape: {
        type: "string"
      }
    },
    key: {
      shape: {
        type: "string"
      }
    },
    cannedAcl: {
      shape: {
        type: "string"
      }
    }
  }
};
