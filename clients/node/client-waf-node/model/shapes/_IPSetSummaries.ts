import { List as _List_ } from "@aws-sdk/types";
import { _IPSetSummary } from "./_IPSetSummary";

export const _IPSetSummaries: _List_ = {
  type: "list",
  member: {
    shape: _IPSetSummary
  }
};
