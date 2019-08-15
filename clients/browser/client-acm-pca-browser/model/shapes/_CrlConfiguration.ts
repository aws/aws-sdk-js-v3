import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CrlConfiguration: _Structure_ = {
  type: "structure",
  required: ["Enabled"],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    ExpirationInDays: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    CustomCname: {
      shape: {
        type: "string"
      }
    },
    S3BucketName: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};
