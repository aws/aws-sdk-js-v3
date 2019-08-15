import { List as _List_ } from "@aws-sdk/types";
import { _InstanceSummary } from "./_InstanceSummary";

export const _InstanceSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceSummary
  }
};
