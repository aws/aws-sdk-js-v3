import { _QueryExecutionList } from "./_QueryExecutionList";
import { _UnprocessedQueryExecutionIdList } from "./_UnprocessedQueryExecutionIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetQueryExecutionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    QueryExecutions: {
      shape: _QueryExecutionList
    },
    UnprocessedQueryExecutionIds: {
      shape: _UnprocessedQueryExecutionIdList
    }
  }
};
