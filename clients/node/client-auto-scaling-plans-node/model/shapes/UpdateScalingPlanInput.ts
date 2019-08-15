import { _ApplicationSource } from "./_ApplicationSource";
import { _ScalingInstructions } from "./_ScalingInstructions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateScalingPlanInput: _Structure_ = {
  type: "structure",
  required: ["ScalingPlanName", "ScalingPlanVersion"],
  members: {
    ScalingPlanName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScalingPlanVersion: {
      shape: {
        type: "integer"
      }
    },
    ApplicationSource: {
      shape: _ApplicationSource
    },
    ScalingInstructions: {
      shape: _ScalingInstructions
    }
  }
};
