import { _ScalingPolicies } from "./_ScalingPolicies";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScalingPlanResource: _Structure_ = {
  type: "structure",
  required: [
    "ScalingPlanName",
    "ScalingPlanVersion",
    "ServiceNamespace",
    "ResourceId",
    "ScalableDimension",
    "ScalingStatusCode"
  ],
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
    ServiceNamespace: {
      shape: {
        type: "string"
      }
    },
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScalableDimension: {
      shape: {
        type: "string"
      }
    },
    ScalingPolicies: {
      shape: _ScalingPolicies
    },
    ScalingStatusCode: {
      shape: {
        type: "string"
      }
    },
    ScalingStatusMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
