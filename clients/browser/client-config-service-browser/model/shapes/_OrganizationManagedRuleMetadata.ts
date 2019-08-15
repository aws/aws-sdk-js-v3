import { _ResourceTypesScope } from "./_ResourceTypesScope";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OrganizationManagedRuleMetadata: _Structure_ = {
  type: "structure",
  required: ["RuleIdentifier"],
  members: {
    Description: {
      shape: {
        type: "string"
      }
    },
    RuleIdentifier: {
      shape: {
        type: "string",
        min: 1
      }
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
