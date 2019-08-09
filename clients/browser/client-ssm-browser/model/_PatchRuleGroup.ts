import { _PatchRuleList } from "./_PatchRuleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PatchRuleGroup: _Structure_ = {
  type: "structure",
  required: ["PatchRules"],
  members: {
    PatchRules: {
      shape: _PatchRuleList
    }
  }
};
