import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListQueryExecutionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    WorkGroup: {
      shape: {
        type: "string"
      }
    }
  }
};
