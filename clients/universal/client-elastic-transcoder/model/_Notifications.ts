import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Notifications: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Progressing: {
      shape: {
        type: "string"
      }
    },
    Completed: {
      shape: {
        type: "string"
      }
    },
    Warning: {
      shape: {
        type: "string"
      }
    },
    Error: {
      shape: {
        type: "string"
      }
    }
  }
};
