import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CloudWatchLogsLogStream: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LogGroupName: {
      shape: {
        type: "string"
      }
    },
    DatetimeFormat: {
      shape: {
        type: "string"
      }
    },
    TimeZone: {
      shape: {
        type: "string"
      }
    },
    File: {
      shape: {
        type: "string"
      }
    },
    FileFingerprintLines: {
      shape: {
        type: "string"
      }
    },
    MultiLineStartPattern: {
      shape: {
        type: "string"
      }
    },
    InitialPosition: {
      shape: {
        type: "string"
      }
    },
    Encoding: {
      shape: {
        type: "string"
      }
    },
    BufferDuration: {
      shape: {
        type: "integer"
      }
    },
    BatchCount: {
      shape: {
        type: "integer"
      }
    },
    BatchSize: {
      shape: {
        type: "integer"
      }
    }
  }
};
