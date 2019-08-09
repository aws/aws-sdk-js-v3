import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Entity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Score: {
      shape: {
        type: "float"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Text: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BeginOffset: {
      shape: {
        type: "integer"
      }
    },
    EndOffset: {
      shape: {
        type: "integer"
      }
    }
  }
};
