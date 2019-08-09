import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccessLog: _Structure_ = {
  type: "structure",
  required: ["Enabled"],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    S3BucketName: {
      shape: {
        type: "string"
      }
    },
    EmitInterval: {
      shape: {
        type: "integer"
      }
    },
    S3BucketPrefix: {
      shape: {
        type: "string"
      }
    }
  }
};
