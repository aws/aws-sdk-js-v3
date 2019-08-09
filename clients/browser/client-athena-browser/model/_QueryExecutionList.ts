import { List as _List_ } from "@aws-sdk/types";
import { _QueryExecution } from "./_QueryExecution";

export const _QueryExecutionList: _List_ = {
  type: "list",
  member: {
    shape: _QueryExecution
  }
};
