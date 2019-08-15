import { List as _List_ } from "@aws-sdk/types";
import { _AutoScalingGroup } from "./_AutoScalingGroup";

export const _AutoScalingGroupList: _List_ = {
  type: "list",
  member: {
    shape: _AutoScalingGroup
  }
};
