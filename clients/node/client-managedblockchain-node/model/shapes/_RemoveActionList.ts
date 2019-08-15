import { List as _List_ } from "@aws-sdk/types";
import { _RemoveAction } from "./_RemoveAction";

export const _RemoveActionList: _List_ = {
  type: "list",
  member: {
    shape: _RemoveAction
  }
};
