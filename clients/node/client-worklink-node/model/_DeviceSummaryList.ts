import { List as _List_ } from "@aws-sdk/types";
import { _DeviceSummary } from "./_DeviceSummary";

export const _DeviceSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _DeviceSummary
  }
};
