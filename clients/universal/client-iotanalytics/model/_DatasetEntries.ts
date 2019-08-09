import { List as _List_ } from "@aws-sdk/types";
import { _DatasetEntry } from "./_DatasetEntry";

export const _DatasetEntries: _List_ = {
  type: "list",
  member: {
    shape: _DatasetEntry
  }
};
