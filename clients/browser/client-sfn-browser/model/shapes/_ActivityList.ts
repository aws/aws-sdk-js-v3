import { List as _List_ } from "@aws-sdk/types";
import { _ActivityListItem } from "./_ActivityListItem";

export const _ActivityList: _List_ = {
  type: "list",
  member: {
    shape: _ActivityListItem
  }
};
