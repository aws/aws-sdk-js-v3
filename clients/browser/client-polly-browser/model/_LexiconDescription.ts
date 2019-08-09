import { _LexiconAttributes } from "./_LexiconAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LexiconDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Attributes: {
      shape: _LexiconAttributes
    }
  }
};
