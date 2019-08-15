import { List as _List_ } from "@aws-sdk/types";
import { _DomainSummary } from "./_DomainSummary";

export const _DomainSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _DomainSummary
  }
};
