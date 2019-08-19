import { List as _List_ } from "@aws-sdk/types";
import { _ByteMatchSetSummary } from "./_ByteMatchSetSummary";

export const _ByteMatchSetSummaries: _List_ = {
  type: "list",
  member: {
    shape: _ByteMatchSetSummary
  }
};
