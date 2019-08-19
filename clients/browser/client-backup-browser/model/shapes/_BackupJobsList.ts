import { List as _List_ } from "@aws-sdk/types";
import { _BackupJob } from "./_BackupJob";

export const _BackupJobsList: _List_ = {
  type: "list",
  member: {
    shape: _BackupJob
  }
};
