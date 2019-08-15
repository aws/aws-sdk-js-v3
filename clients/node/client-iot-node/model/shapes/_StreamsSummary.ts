import { List as _List_ } from "@aws-sdk/types";
import { _StreamSummary } from "./_StreamSummary";

export const _StreamsSummary: _List_ = {
  type: "list",
  member: {
    shape: _StreamSummary
  }
};
