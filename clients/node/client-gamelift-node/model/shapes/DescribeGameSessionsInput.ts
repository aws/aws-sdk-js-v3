import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeGameSessionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    GameSessionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AliasId: {
      shape: {
        type: "string"
      }
    },
    StatusFilter: {
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
