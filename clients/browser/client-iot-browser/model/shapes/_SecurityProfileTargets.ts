import { List as _List_ } from "@aws-sdk/types";
import { _SecurityProfileTarget } from "./_SecurityProfileTarget";

export const _SecurityProfileTargets: _List_ = {
  type: "list",
  member: {
    shape: _SecurityProfileTarget
  }
};
