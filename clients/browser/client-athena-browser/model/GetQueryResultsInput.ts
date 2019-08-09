import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetQueryResultsInput: _Structure_ = {
  type: "structure",
  required: ["QueryExecutionId"],
  members: {
    QueryExecutionId: {
      shape: {
        type: "string"
      }
    },
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
    }
  }
};
