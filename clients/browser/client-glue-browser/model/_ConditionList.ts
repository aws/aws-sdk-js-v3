import { List as _List_ } from "@aws-sdk/types";
import { _Condition } from "./_Condition";

export const _ConditionList: _List_ = {
  type: "list",
  member: {
    shape: _Condition
  }
};
