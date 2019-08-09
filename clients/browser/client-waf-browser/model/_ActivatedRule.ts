import { _WafAction } from "./_WafAction";
import { _WafOverrideAction } from "./_WafOverrideAction";
import { _ExcludedRules } from "./_ExcludedRules";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActivatedRule: _Structure_ = {
  type: "structure",
  required: ["Priority", "RuleId"],
  members: {
    Priority: {
      shape: {
        type: "integer"
      }
    },
    RuleId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Action: {
      shape: _WafAction
    },
    OverrideAction: {
      shape: _WafOverrideAction
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    ExcludedRules: {
      shape: _ExcludedRules
    }
  }
};
