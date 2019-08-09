import { List as _List_ } from "@aws-sdk/types";
import { _WorkflowExecutionInfo } from "./_WorkflowExecutionInfo";

export const _WorkflowExecutionInfoList: _List_ = {
  type: "list",
  member: {
    shape: _WorkflowExecutionInfo
  }
};
