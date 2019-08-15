import { _Attributes } from "./_Attributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DimensionValuesWithAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Value: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _Attributes
    }
  }
};
