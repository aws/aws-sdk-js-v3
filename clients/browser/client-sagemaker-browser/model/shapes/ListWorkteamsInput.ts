import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListWorkteamsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SortBy: {
      shape: {
        type: "string"
      }
    },
    SortOrder: {
      shape: {
        type: "string"
      }
    },
    NameContains: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
