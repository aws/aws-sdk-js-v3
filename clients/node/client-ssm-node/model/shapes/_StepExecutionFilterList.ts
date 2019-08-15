import { List as _List_ } from "@aws-sdk/types";
import { _StepExecutionFilter } from "./_StepExecutionFilter";

export const _StepExecutionFilterList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _StepExecutionFilter
  }
};
