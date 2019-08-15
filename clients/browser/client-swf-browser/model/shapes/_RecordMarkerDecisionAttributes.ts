import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecordMarkerDecisionAttributes: _Structure_ = {
  type: "structure",
  required: ["markerName"],
  members: {
    markerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    details: {
      shape: {
        type: "string"
      }
    }
  }
};
