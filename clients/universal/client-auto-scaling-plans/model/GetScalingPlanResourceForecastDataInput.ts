import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetScalingPlanResourceForecastDataInput: _Structure_ = {
  type: "structure",
  required: [
    "ScalingPlanName",
    "ScalingPlanVersion",
    "ServiceNamespace",
    "ResourceId",
    "ScalableDimension",
    "ForecastDataType",
    "StartTime",
    "EndTime"
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
        type: "string"
      }
    },
    ScalableDimension: {
      shape: {
        type: "string"
      }
    },
    ForecastDataType: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
