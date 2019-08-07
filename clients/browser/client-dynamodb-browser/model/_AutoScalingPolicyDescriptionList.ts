import { List as _List_ } from "@aws-sdk/types";
import { _AutoScalingPolicyDescription } from "./_AutoScalingPolicyDescription";

export const _AutoScalingPolicyDescriptionList: _List_ = {
  type: "list",
  member: {
    shape: _AutoScalingPolicyDescription
  }
};
