import { List as _List_ } from "@aws-sdk/types";
import { _DatasetSummary } from "./_DatasetSummary";

export const _DatasetSummaries: _List_ = {
  type: "list",
  member: {
    shape: _DatasetSummary
  }
};
