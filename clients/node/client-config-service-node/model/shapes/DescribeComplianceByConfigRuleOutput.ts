import { _ComplianceByConfigRules } from "./_ComplianceByConfigRules";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeComplianceByConfigRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ComplianceByConfigRules: {
      shape: _ComplianceByConfigRules
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
