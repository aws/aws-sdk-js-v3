import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Event: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string"
      }
    },
    service: {
      shape: {
        type: "string",
        min: 2
      }
    },
    eventTypeCode: {
      shape: {
        type: "string",
        min: 3
      }
    },
    eventTypeCategory: {
      shape: {
        type: "string",
        min: 3
      }
    },
    region: {
      shape: {
        type: "string"
      }
    },
    availabilityZone: {
      shape: {
        type: "string"
      }
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    endTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    statusCode: {
      shape: {
        type: "string"
      }
    }
  }
};
