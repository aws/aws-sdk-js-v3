import { _TrustedAdvisorCheckList } from "./_TrustedAdvisorCheckList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrustedAdvisorChecksOutput: _Structure_ = {
  type: "structure",
  required: ["checks"],
  members: {
    checks: {
      shape: _TrustedAdvisorCheckList
    }
  }
};
