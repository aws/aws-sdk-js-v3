import { List as _List_ } from "@aws-sdk/types";
import { _LoadBasedAutoScalingConfiguration } from "./_LoadBasedAutoScalingConfiguration";

export const _LoadBasedAutoScalingConfigurations: _List_ = {
  type: "list",
  member: {
    shape: _LoadBasedAutoScalingConfiguration
  }
};
