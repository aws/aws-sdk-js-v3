import { List as _List_ } from "@aws-sdk/types";
import { _Backup } from "./_Backup";

export const _Backups: _List_ = {
  type: "list",
  member: {
    shape: _Backup
  }
};
