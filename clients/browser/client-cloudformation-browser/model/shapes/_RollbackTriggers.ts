import { List as _List_ } from "@aws-sdk/types";
import { _RollbackTrigger } from "./_RollbackTrigger";

export const _RollbackTriggers: _List_ = {
  type: "list",
  member: {
    shape: _RollbackTrigger
  }
};
