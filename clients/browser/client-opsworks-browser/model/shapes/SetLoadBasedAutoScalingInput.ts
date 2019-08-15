import { _AutoScalingThresholds } from "./_AutoScalingThresholds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetLoadBasedAutoScalingInput: _Structure_ = {
  type: "structure",
  required: ["LayerId"],
  members: {
    LayerId: {
      shape: {
        type: "string"
      }
    },
    Enable: {
      shape: {
        type: "boolean"
      }
    },
    UpScaling: {
      shape: _AutoScalingThresholds
    },
    DownScaling: {
      shape: _AutoScalingThresholds
    }
  }
};
