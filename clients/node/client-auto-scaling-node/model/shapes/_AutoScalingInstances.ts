import { List as _List_ } from "@aws-sdk/types";
import { _AutoScalingInstanceDetails } from "./_AutoScalingInstanceDetails";

export const _AutoScalingInstances: _List_ = {
  type: "list",
  member: {
    shape: _AutoScalingInstanceDetails
  }
};
