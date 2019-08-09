import { _ConfigRuleNames } from "./_ConfigRuleNames";
import { _ComplianceTypes } from "./_ComplianceTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeComplianceByConfigRuleInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigRuleNames: {
      shape: _ConfigRuleNames
    },
    ComplianceTypes: {
      shape: _ComplianceTypes
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
