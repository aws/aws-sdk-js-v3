import { _Scope } from "./_Scope";
import { _Source } from "./_Source";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigRule: _Structure_ = {
  type: "structure",
  required: ["Source"],
  members: {
    ConfigRuleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ConfigRuleArn: {
      shape: {
        type: "string"
      }
    },
    ConfigRuleId: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Scope: {
      shape: _Scope
    },
    Source: {
      shape: _Source
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
    ConfigRuleState: {
      shape: {
        type: "string"
      }
    },
    CreatedBy: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
