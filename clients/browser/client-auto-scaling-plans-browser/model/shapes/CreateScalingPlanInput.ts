import { _ApplicationSource } from "./_ApplicationSource";
import { _ScalingInstructions } from "./_ScalingInstructions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateScalingPlanInput: _Structure_ = {
  type: "structure",
  required: ["ScalingPlanName", "ApplicationSource", "ScalingInstructions"],
  members: {
    ScalingPlanName: {
      shape: {
        type: "string",
        min: 1
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
