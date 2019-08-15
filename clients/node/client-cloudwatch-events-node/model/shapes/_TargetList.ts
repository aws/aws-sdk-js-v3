import { List as _List_ } from "@aws-sdk/types";
import { _Target } from "./_Target";

export const _TargetList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _Target
  }
};
