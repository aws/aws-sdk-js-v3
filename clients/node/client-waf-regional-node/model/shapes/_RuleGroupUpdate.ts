import { _ActivatedRule } from "./_ActivatedRule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RuleGroupUpdate: _Structure_ = {
  type: "structure",
  required: ["Action", "ActivatedRule"],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    ActivatedRule: {
      shape: _ActivatedRule
    }
  }
};
