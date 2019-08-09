import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PresignedUrlConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    expiresInSec: {
      shape: {
        type: "integer",
        min: 60
      }
    }
  }
};
