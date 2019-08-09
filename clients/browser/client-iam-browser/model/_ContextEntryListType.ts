import { List as _List_ } from "@aws-sdk/types";
import { _ContextEntry } from "./_ContextEntry";

export const _ContextEntryListType: _List_ = {
  type: "list",
  member: {
    shape: _ContextEntry
  }
};
