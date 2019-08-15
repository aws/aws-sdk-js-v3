import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchGameSessionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    AliasId: {
      shape: {
        type: "string"
      }
    },
    FilterExpression: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SortExpression: {
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
