import { List as _List_ } from "@aws-sdk/types";
import { _SetFileModeEntry } from "./_SetFileModeEntry";

export const _SetFileModeEntries: _List_ = {
  type: "list",
  member: {
    shape: _SetFileModeEntry
  }
};
