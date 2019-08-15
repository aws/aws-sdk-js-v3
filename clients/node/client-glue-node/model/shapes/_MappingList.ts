import { List as _List_ } from "@aws-sdk/types";
import { _MappingEntry } from "./_MappingEntry";

export const _MappingList: _List_ = {
  type: "list",
  member: {
    shape: _MappingEntry
  }
};
