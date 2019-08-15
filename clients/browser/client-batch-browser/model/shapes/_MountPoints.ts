import { List as _List_ } from "@aws-sdk/types";
import { _MountPoint } from "./_MountPoint";

export const _MountPoints: _List_ = {
  type: "list",
  member: {
    shape: _MountPoint
  }
};
