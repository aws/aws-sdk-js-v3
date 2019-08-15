import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLogEventsInput: _Structure_ = {
  type: "structure",
  required: ["logGroupName", "logStreamName"],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    logStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    startTime: {
      shape: {
        type: "integer"
      }
    },
    endTime: {
      shape: {
        type: "integer"
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    startFromHead: {
      shape: {
        type: "boolean"
      }
    }
  }
};
