import { List as _List_ } from "@aws-sdk/types";
import { _TrustedAdvisorCheckSummary } from "./_TrustedAdvisorCheckSummary";

export const _TrustedAdvisorCheckSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _TrustedAdvisorCheckSummary
  }
};
