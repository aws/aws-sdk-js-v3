import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScalingActivity: _Structure_ = {
  type: "structure",
  required: [
    "ActivityId",
    "ServiceNamespace",
    "ResourceId",
    "ScalableDimension",
    "Description",
    "Cause",
    "StartTime",
    "StatusCode"
  ],
  members: {
    ActivityId: {
      shape: {
        type: "string"
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
    Description: {
      shape: {
        type: "string"
      }
    },
    Cause: {
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
    StatusCode: {
      shape: {
        type: "string"
      }
    },
    StatusMessage: {
      shape: {
        type: "string"
      }
    },
    Details: {
      shape: {
        type: "string"
      }
    }
  }
};
