import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TaskScheduledEventDetails: _Structure_ = {
  type: "structure",
  required: ["resourceType", "resource", "region", "parameters"],
  members: {
    resourceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    resource: {
      shape: {
        type: "string",
        min: 1
      }
    },
    region: {
      shape: {
        type: "string",
        min: 1
      }
    },
    parameters: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    timeoutInSeconds: {
      shape: {
        type: "integer"
      }
    }
  }
};
