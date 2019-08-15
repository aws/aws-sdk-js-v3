import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Crawl: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    State: {
      shape: {
        type: "string"
      }
    },
    StartedOn: {
      shape: {
        type: "timestamp"
      }
    },
    CompletedOn: {
      shape: {
        type: "timestamp"
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
    }
  }
};
