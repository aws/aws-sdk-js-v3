import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EventType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    service: {
      shape: {
        type: "string",
        min: 2
      }
    },
    code: {
      shape: {
        type: "string",
        min: 3
      }
    },
    category: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};
