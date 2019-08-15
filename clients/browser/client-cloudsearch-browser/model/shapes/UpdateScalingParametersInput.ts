import { _ScalingParameters } from "./_ScalingParameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateScalingParametersInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "ScalingParameters"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    ScalingParameters: {
      shape: _ScalingParameters
    }
  }
};
