import { _QueryExecutionIdList } from "./_QueryExecutionIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListQueryExecutionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    QueryExecutionIds: {
      shape: _QueryExecutionIdList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
