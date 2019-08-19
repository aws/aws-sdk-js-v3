import { List as _List_ } from "@aws-sdk/types";
import { _TimeBasedAutoScalingConfiguration } from "./_TimeBasedAutoScalingConfiguration";

export const _TimeBasedAutoScalingConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _TimeBasedAutoScalingConfiguration
  }
};
