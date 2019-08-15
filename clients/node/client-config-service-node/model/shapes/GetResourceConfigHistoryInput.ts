import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourceConfigHistoryInput: _Structure_ = {
  type: "structure",
  required: ["resourceType", "resourceId"],
  members: {
    resourceType: {
      shape: {
        type: "string"
      }
    },
    resourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    laterTime: {
      shape: {
        type: "timestamp"
      }
    },
    earlierTime: {
      shape: {
        type: "timestamp"
      }
    },
    chronologicalOrder: {
      shape: {
        type: "string"
      }
    },
    limit: {
      shape: {
        type: "integer"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
