import { List as _List_ } from "@aws-sdk/types";
import { _ReplaceContentEntry } from "./_ReplaceContentEntry";

export const _ReplaceContentEntries: _List_ = {
  type: "list",
  member: {
    shape: _ReplaceContentEntry
  }
};
