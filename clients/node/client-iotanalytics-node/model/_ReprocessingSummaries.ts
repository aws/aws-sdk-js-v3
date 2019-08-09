import { List as _List_ } from "@aws-sdk/types";
import { _ReprocessingSummary } from "./_ReprocessingSummary";

export const _ReprocessingSummaries: _List_ = {
  type: "list",
  member: {
    shape: _ReprocessingSummary
  }
};
