import { List as _List_ } from "@aws-sdk/types";
import { _OperationSummary } from "./_OperationSummary";

export const _OperationSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _OperationSummary
  }
};
