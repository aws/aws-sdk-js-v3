import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePlayerSessionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GameSessionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PlayerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PlayerSessionId: {
      shape: {
        type: "string"
      }
    },
    PlayerSessionStatusFilter: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
