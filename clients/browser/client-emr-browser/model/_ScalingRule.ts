import { _ScalingAction } from "./_ScalingAction";
import { _ScalingTrigger } from "./_ScalingTrigger";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScalingRule: _Structure_ = {
  type: "structure",
  required: ["Name", "Action", "Trigger"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Action: {
      shape: _ScalingAction
    },
    Trigger: {
      shape: _ScalingTrigger
    }
  }
};
