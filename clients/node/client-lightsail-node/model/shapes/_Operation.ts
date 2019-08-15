import { _ResourceLocation } from "./_ResourceLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Operation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    resourceName: {
      shape: {
        type: "string"
      }
    },
    resourceType: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    location: {
      shape: _ResourceLocation
    },
    isTerminal: {
      shape: {
        type: "boolean"
      }
    },
    operationDetails: {
      shape: {
        type: "string"
      }
    },
    operationType: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    statusChangedAt: {
      shape: {
        type: "timestamp"
      }
    },
    errorCode: {
      shape: {
        type: "string"
      }
    },
    errorDetails: {
      shape: {
        type: "string"
      }
    }
  }
};
