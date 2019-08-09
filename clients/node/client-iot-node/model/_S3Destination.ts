import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Destination: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    bucket: {
      shape: {
        type: "string",
        min: 1
      }
    },
    prefix: {
      shape: {
        type: "string"
      }
    }
  }
};
