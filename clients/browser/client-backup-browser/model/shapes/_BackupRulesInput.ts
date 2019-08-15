import { List as _List_ } from "@aws-sdk/types";
import { _BackupRuleInput } from "./_BackupRuleInput";

export const _BackupRulesInput: _List_ = {
  type: "list",
  member: {
    shape: _BackupRuleInput
  }
};
