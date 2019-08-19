import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KeyPhrase: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Score: {
      shape: {
        type: "float"
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
