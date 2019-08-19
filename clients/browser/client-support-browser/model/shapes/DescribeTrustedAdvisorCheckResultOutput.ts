import { _TrustedAdvisorCheckResult } from "./_TrustedAdvisorCheckResult";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrustedAdvisorCheckResultOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    result: {
      shape: _TrustedAdvisorCheckResult
    }
  }
};
