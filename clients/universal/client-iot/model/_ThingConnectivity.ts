import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ThingConnectivity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    connected: {
      shape: {
        type: "boolean"
      }
    },
    timestamp: {
      shape: {
        type: "integer"
      }
    }
  }
};
