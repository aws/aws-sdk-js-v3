import { List as _List_ } from "@aws-sdk/types";
import { _BatchWriteOperation } from "./_BatchWriteOperation";

export const _BatchWriteOperationList: _List_ = {
  type: "list",
  member: {
    shape: _BatchWriteOperation
  }
};
