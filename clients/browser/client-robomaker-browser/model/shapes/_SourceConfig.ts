import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SourceConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    s3Bucket: {
      shape: {
        type: "string",
        min: 3
      }
    },
    s3Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    architecture: {
      shape: {
        type: "string"
      }
    }
  }
};
