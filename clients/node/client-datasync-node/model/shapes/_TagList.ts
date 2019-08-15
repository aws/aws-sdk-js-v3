import { List as _List_ } from "@aws-sdk/types";
import { _TagListEntry } from "./_TagListEntry";

export const _TagList: _List_ = {
  type: "list",
  member: {
    shape: _TagListEntry
  }
};
