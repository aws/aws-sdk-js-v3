import { _TargetTrackingConfiguration } from "./_TargetTrackingConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScalingPolicy: _Structure_ = {
  type: "structure",
  required: ["PolicyName", "PolicyType"],
  members: {
    PolicyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyType: {
      shape: {
        type: "string"
      }
    },
    TargetTrackingConfiguration: {
      shape: _TargetTrackingConfiguration
    }
  }
};
