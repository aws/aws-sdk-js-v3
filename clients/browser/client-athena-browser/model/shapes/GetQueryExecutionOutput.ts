import { _QueryExecution } from "./_QueryExecution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetQueryExecutionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    QueryExecution: {
      shape: _QueryExecution
    }
  }
};
