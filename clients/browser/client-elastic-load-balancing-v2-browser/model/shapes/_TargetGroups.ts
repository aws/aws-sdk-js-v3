import { List as _List_ } from "@aws-sdk/types";
import { _TargetGroup } from "./_TargetGroup";

export const _TargetGroups: _List_ = {
  type: "list",
  member: {
    shape: _TargetGroup
  }
};
