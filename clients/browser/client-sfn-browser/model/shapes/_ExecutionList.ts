import { List as _List_ } from "@aws-sdk/types";
import { _ExecutionListItem } from "./_ExecutionListItem";

export const _ExecutionList: _List_ = {
  type: "list",
  member: {
    shape: _ExecutionListItem
  }
};
