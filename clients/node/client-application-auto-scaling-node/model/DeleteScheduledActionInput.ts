import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteScheduledActionInput: _Structure_ = {
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
    }
  }
};
