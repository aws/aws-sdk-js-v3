import { List as _List_ } from "@aws-sdk/types";
import { _BackupRule } from "./_BackupRule";

export const _BackupRules: _List_ = {
  type: "list",
  member: {
    shape: _BackupRule
  }
};
