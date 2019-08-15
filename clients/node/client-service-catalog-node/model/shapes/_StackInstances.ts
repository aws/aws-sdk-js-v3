import { List as _List_ } from "@aws-sdk/types";
import { _StackInstance } from "./_StackInstance";

export const _StackInstances: _List_ = {
  type: "list",
  member: {
    shape: _StackInstance
  }
};
