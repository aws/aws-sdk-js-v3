import { List as _List_ } from "@aws-sdk/types";
import { _RunCommandTarget } from "./_RunCommandTarget";

export const _RunCommandTargets: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _RunCommandTarget
  }
};
