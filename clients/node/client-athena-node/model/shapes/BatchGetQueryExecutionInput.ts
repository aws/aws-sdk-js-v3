import { _QueryExecutionIdList } from "./_QueryExecutionIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetQueryExecutionInput: _Structure_ = {
  type: "structure",
  required: ["QueryExecutionIds"],
  members: {
    QueryExecutionIds: {
      shape: _QueryExecutionIdList
    }
  }
};
