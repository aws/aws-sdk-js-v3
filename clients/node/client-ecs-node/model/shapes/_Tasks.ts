import { List as _List_ } from "@aws-sdk/types";
import { _Task } from "./_Task";

export const _Tasks: _List_ = {
  type: "list",
  member: {
    shape: _Task
  }
};
