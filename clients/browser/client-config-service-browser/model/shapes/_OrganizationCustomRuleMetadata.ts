import { _OrganizationConfigRuleTriggerTypes } from "./_OrganizationConfigRuleTriggerTypes";
import { _ResourceTypesScope } from "./_ResourceTypesScope";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OrganizationCustomRuleMetadata: _Structure_ = {
  type: "structure",
  required: ["LambdaFunctionArn", "OrganizationConfigRuleTriggerTypes"],
  members: {
    Description: {
      shape: {
        type: "string"
      }
    },
    LambdaFunctionArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OrganizationConfigRuleTriggerTypes: {
      shape: _OrganizationConfigRuleTriggerTypes
    },
    InputParameters: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaximumExecutionFrequency: {
      shape: {
        type: "string"
      }
    },
    ResourceTypesScope: {
      shape: _ResourceTypesScope
    },
    ResourceIdScope: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TagKeyScope: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TagValueScope: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
