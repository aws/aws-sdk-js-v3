import { _TrustedAdvisorCheckSummaryList } from "./_TrustedAdvisorCheckSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrustedAdvisorCheckSummariesOutput: _Structure_ = {
  type: "structure",
  required: ["summaries"],
  members: {
    summaries: {
      shape: _TrustedAdvisorCheckSummaryList
    }
  }
};
