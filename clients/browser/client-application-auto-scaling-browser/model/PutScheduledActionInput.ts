import { _ScalableTargetAction } from "./_ScalableTargetAction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutScheduledActionInput: _Structure_ = {
  type: "structure",
  required: [
    "ServiceNamespace",
    "ScheduledActionName",
    "ResourceId",
    "ScalableDimension"
  ],
  members: {
    ServiceNamespace: {
      shape: {
        type: "string"
      }
    },
    Schedule: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScheduledActionName: {
      shape: {
        type: "string",
        min: 1
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
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    ScalableTargetAction: {
      shape: _ScalableTargetAction
    }
  }
};
