import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TelemetryMetadata: _Structure_ = {
  type: "structure",
  required: ["messageType", "count"],
  members: {
    messageType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    count: {
      shape: {
        type: "integer"
      }
    },
    dataSize: {
      shape: {
        type: "integer"
      }
    }
  }
};
