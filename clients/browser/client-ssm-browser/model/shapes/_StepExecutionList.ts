import { List as _List_ } from "@aws-sdk/types";
import { _StepExecution } from "./_StepExecution";

export const _StepExecutionList: _List_ = {
  type: "list",
  member: {
    shape: _StepExecution
  }
};
