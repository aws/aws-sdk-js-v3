import { List as _List_ } from "@aws-sdk/types";
import { _CancellationReason } from "./_CancellationReason";

export const _CancellationReasonList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _CancellationReason
  }
};
