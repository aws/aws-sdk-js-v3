import { List as _List_ } from "@aws-sdk/types";
import { _PutFileEntry } from "./_PutFileEntry";

export const _PutFileEntries: _List_ = {
  type: "list",
  member: {
    shape: _PutFileEntry
  }
};
