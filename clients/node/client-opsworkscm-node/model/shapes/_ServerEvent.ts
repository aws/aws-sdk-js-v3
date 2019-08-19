import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServerEvent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    ServerName: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    LogUrl: {
      shape: {
        type: "string"
      }
    }
  }
};
