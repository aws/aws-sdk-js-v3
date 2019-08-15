import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SourceName: {
      shape: {
        type: "string"
      }
    },
    SourceType: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    Duration: {
      shape: {
        type: "integer"
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
