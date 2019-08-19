import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AggregatedSourceStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SourceId: {
      shape: {
        type: "string"
      }
    },
    SourceType: {
      shape: {
        type: "string"
      }
    },
    AwsRegion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LastUpdateStatus: {
      shape: {
        type: "string"
      }
    },
    LastUpdateTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastErrorCode: {
      shape: {
        type: "string"
      }
    },
    LastErrorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
