import { List as _List_ } from "@aws-sdk/types";
import { _ActionTarget } from "./_ActionTarget";

export const _ActionTargetList: _List_ = {
  type: "list",
  member: {
    shape: _ActionTarget
  }
};
