import { List as _List_ } from "@aws-sdk/types";
import { _SystemInstanceSummary } from "./_SystemInstanceSummary";

export const _SystemInstanceSummaries: _List_ = {
  type: "list",
  member: {
    shape: _SystemInstanceSummary
  }
};
