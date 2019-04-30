import { _AutoScalingPolicyDescriptionList } from "./_AutoScalingPolicyDescriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AutoScalingSettingsDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MinimumUnits: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    MaximumUnits: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    AutoScalingDisabled: {
      shape: {
        type: "boolean"
      }
    },
    AutoScalingRoleArn: {
      shape: {
        type: "string"
      }
    },
    ScalingPolicies: {
      shape: _AutoScalingPolicyDescriptionList
    }
  }
};
