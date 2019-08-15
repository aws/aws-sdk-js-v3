import { _ComplianceSummary } from "./_ComplianceSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetComplianceSummaryByConfigRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ComplianceSummary: {
      shape: _ComplianceSummary
    }
  }
};
