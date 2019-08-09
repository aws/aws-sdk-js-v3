import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRelationalDatabaseLogEventsInput: _Structure_ = {
  type: "structure",
  required: ["relationalDatabaseName", "logStreamName"],
  members: {
    relationalDatabaseName: {
      shape: {
        type: "string"
      }
    },
    logStreamName: {
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
    startFromHead: {
      shape: {
        type: "boolean"
      }
    },
    pageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
