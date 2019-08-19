import { List as _List_ } from "@aws-sdk/types";
import { _TargetGroup } from "./_TargetGroup";

export const _TargetGroups: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _TargetGroup,
    locationName: "item"
  }
};
