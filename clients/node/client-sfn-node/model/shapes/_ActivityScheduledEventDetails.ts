import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActivityScheduledEventDetails: _Structure_ = {
  type: "structure",
  required: ["resource"],
  members: {
    resource: {
      shape: {
        type: "string",
        min: 1
      }
    },
    input: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    timeoutInSeconds: {
      shape: {
        type: "integer"
      }
    },
    heartbeatInSeconds: {
      shape: {
        type: "integer"
      }
    }
  }
};
