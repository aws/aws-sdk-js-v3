import { List as _List_ } from "@aws-sdk/types";
import { _ServiceActionSummary } from "./_ServiceActionSummary";

export const _ServiceActionSummaries: _List_ = {
  type: "list",
  member: {
    shape: _ServiceActionSummary
  }
};
