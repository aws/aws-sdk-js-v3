import { _FieldPatternList } from "./_FieldPatternList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FieldPatterns: _Structure_ = {
  type: "structure",
  required: ["Quantity"],
  members: {
    Quantity: {
      shape: {
        type: "integer"
      }
    },
    Items: {
      shape: _FieldPatternList
    }
  }
};
