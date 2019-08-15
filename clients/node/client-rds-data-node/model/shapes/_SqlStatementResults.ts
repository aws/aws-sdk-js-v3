import { List as _List_ } from "@aws-sdk/types";
import { _SqlStatementResult } from "./_SqlStatementResult";

export const _SqlStatementResults: _List_ = {
  type: "list",
  member: {
    shape: _SqlStatementResult
  }
};
