import { _Operator } from "./_Operator";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Selector: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    fieldName: {
      shape: {
        type: "string"
      }
    },
    operator: {
      shape: _Operator
    }
  }
};
