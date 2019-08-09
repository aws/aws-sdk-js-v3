import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LastCrawlInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    },
    LogGroup: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LogStream: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MessagePrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
