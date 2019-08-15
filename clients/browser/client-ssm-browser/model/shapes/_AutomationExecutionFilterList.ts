import { List as _List_ } from "@aws-sdk/types";
import { _AutomationExecutionFilter } from "./_AutomationExecutionFilter";

export const _AutomationExecutionFilterList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _AutomationExecutionFilter
  }
};
