import { List as _List_ } from "@aws-sdk/types";
import { _ClusterSummary } from "./_ClusterSummary";

export const _ClusterSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _ClusterSummary
  }
};
