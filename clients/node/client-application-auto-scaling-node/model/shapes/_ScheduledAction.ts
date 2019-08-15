import { _ScalableTargetAction } from "./_ScalableTargetAction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduledAction: _Structure_ = {
  type: "structure",
  required: [
    "ScheduledActionName",
    "ScheduledActionARN",
    "ServiceNamespace",
    "Schedule",
    "ResourceId",
    "CreationTime"
  ],
  members: {
    ScheduledActionName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScheduledActionARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
