import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Event: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SourceName: {
      shape: {
        type: "string"
      }
    },
    SourceType: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    Date: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
