import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    s3Bucket: {
      shape: {
        type: "string",
        min: 3
      }
    },
    s3Prefix: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
