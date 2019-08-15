import { List as _List_ } from "@aws-sdk/types";
import { _UnprocessedQueryExecutionId } from "./_UnprocessedQueryExecutionId";

export const _UnprocessedQueryExecutionIdList: _List_ = {
  type: "list",
  member: {
    shape: _UnprocessedQueryExecutionId
  }
};
