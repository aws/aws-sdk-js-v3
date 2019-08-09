import { List as _List_ } from "@aws-sdk/types";
import { _DeleteFileEntry } from "./_DeleteFileEntry";

export const _DeleteFileEntries: _List_ = {
  type: "list",
  member: {
    shape: _DeleteFileEntry
  }
};
