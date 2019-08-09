import { _SqlStatementResults } from "./_SqlStatementResults";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExecuteSqlOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    sqlStatementResults: {
      shape: _SqlStatementResults
    }
  }
};
