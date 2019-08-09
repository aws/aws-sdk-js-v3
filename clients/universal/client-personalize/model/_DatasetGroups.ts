import { List as _List_ } from "@aws-sdk/types";
import { _DatasetGroupSummary } from "./_DatasetGroupSummary";

export const _DatasetGroups: _List_ = {
  type: "list",
  member: {
    shape: _DatasetGroupSummary
  }
};
