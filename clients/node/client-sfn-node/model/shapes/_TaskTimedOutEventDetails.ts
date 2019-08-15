import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TaskTimedOutEventDetails: _Structure_ = {
  type: "structure",
  required: ["resourceType", "resource"],
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
    error: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    cause: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
