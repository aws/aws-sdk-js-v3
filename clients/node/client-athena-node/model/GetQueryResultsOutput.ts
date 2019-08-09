import { _ResultSet } from "./_ResultSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetQueryResultsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UpdateCount: {
      shape: {
        type: "integer"
      }
    },
    ResultSet: {
      shape: _ResultSet
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
