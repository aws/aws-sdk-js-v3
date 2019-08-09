import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBInstanceStatusInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StatusType: {
      shape: {
        type: "string"
      }
    },
    Normal: {
      shape: {
        type: "boolean"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    }
  }
};
