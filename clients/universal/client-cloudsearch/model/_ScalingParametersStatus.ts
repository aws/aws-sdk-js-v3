import { _ScalingParameters } from "./_ScalingParameters";
import { _OptionStatus } from "./_OptionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScalingParametersStatus: _Structure_ = {
  type: "structure",
  required: ["Options", "Status"],
  members: {
    Options: {
      shape: _ScalingParameters
    },
    Status: {
      shape: _OptionStatus
    }
  }
};
