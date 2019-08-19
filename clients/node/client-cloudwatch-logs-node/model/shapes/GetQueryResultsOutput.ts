import { _QueryResults } from "./_QueryResults";
import { _QueryStatistics } from "./_QueryStatistics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetQueryResultsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    results: {
      shape: _QueryResults
    },
    statistics: {
      shape: _QueryStatistics
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
