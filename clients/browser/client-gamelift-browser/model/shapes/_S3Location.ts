import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Location: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Bucket: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ObjectVersion: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
