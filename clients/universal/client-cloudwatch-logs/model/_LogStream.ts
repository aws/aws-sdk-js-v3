import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LogStream: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    logStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    creationTime: {
      shape: {
        type: "integer"
      }
    },
    firstEventTimestamp: {
      shape: {
        type: "integer"
      }
    },
    lastEventTimestamp: {
      shape: {
        type: "integer"
      }
    },
    lastIngestionTime: {
      shape: {
        type: "integer"
      }
    },
    uploadSequenceToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    storedBytes: {
      shape: {
        type: "integer"
      }
    }
  }
};
