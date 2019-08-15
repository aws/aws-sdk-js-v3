import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Location: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    bucket: {
      shape: {
        type: "string"
      }
    },
    key: {
      shape: {
        type: "string"
      }
    }
  }
};
