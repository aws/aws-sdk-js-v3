import { _stringList } from "./_stringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Operator: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    values: {
      shape: _stringList
    }
  }
};
