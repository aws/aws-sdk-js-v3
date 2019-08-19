import { List as _List_ } from "@aws-sdk/types";
import { _NotebookInstanceSummary } from "./_NotebookInstanceSummary";

export const _NotebookInstanceSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _NotebookInstanceSummary
  }
};
