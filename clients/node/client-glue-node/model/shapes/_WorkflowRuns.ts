import { List as _List_ } from "@aws-sdk/types";
import { _WorkflowRun } from "./_WorkflowRun";

export const _WorkflowRuns: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _WorkflowRun
  }
};
