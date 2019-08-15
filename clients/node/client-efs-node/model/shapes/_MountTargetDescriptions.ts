import { List as _List_ } from "@aws-sdk/types";
import { _MountTargetDescription } from "./_MountTargetDescription";

export const _MountTargetDescriptions: _List_ = {
  type: "list",
  member: {
    shape: _MountTargetDescription
  }
};
