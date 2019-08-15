import { List as _List_ } from "@aws-sdk/types";
import { _Disk } from "./_Disk";

export const _Disks: _List_ = {
  type: "list",
  member: {
    shape: _Disk
  }
};
