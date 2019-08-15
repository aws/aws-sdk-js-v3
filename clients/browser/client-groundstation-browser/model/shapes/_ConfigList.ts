import { List as _List_ } from "@aws-sdk/types";
import { _ConfigListItem } from "./_ConfigListItem";

export const _ConfigList: _List_ = {
  type: "list",
  member: {
    shape: _ConfigListItem
  }
};
