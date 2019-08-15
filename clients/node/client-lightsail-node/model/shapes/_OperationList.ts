import { List as _List_ } from "@aws-sdk/types";
import { _Operation } from "./_Operation";

export const _OperationList: _List_ = {
  type: "list",
  member: {
    shape: _Operation
  }
};
