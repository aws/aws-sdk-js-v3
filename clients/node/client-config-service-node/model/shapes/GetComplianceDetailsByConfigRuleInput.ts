import { _ComplianceTypes } from "./_ComplianceTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetComplianceDetailsByConfigRuleInput: _Structure_ = {
  type: "structure",
  required: ["ConfigRuleName"],
  members: {
    ConfigRuleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ComplianceTypes: {
      shape: _ComplianceTypes
    },
    Limit: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
