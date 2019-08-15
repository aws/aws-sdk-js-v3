import { List as _List_ } from "@aws-sdk/types";
import { _DatasetContentSummary } from "./_DatasetContentSummary";

export const _DatasetContentSummaries: _List_ = {
  type: "list",
  member: {
    shape: _DatasetContentSummary
  }
};
