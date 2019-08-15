import { _ConditionList } from "./_ConditionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Predicate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Logical: {
      shape: {
        type: "string"
      }
    },
    Conditions: {
      shape: _ConditionList
    }
  }
};
