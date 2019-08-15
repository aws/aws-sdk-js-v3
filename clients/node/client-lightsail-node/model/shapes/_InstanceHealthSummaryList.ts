import { List as _List_ } from "@aws-sdk/types";
import { _InstanceHealthSummary } from "./_InstanceHealthSummary";

export const _InstanceHealthSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceHealthSummary
  }
};
