import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Lexicon: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Content: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
