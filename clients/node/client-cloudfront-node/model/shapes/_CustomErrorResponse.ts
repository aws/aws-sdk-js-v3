import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomErrorResponse: _Structure_ = {
  type: "structure",
  required: ["ErrorCode"],
  members: {
    ErrorCode: {
      shape: {
        type: "integer"
      }
    },
    ResponsePagePath: {
      shape: {
        type: "string"
      }
    },
    ResponseCode: {
      shape: {
        type: "string"
      }
    },
    ErrorCachingMinTTL: {
      shape: {
        type: "integer"
      }
    }
  }
};
