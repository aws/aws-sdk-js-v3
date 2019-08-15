import { List as _List_ } from "@aws-sdk/types";
import { _BatchReadOperation } from "./_BatchReadOperation";

export const _BatchReadOperationList: _List_ = {
  type: "list",
  member: {
    shape: _BatchReadOperation
  }
};
