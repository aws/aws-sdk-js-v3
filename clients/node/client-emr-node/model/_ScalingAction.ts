import { _SimpleScalingPolicyConfiguration } from "./_SimpleScalingPolicyConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScalingAction: _Structure_ = {
  type: "structure",
  required: ["SimpleScalingPolicyConfiguration"],
  members: {
    Market: {
      shape: {
        type: "string"
      }
    },
    SimpleScalingPolicyConfiguration: {
      shape: _SimpleScalingPolicyConfiguration
    }
  }
};
