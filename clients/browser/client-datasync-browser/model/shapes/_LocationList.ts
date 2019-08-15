import { List as _List_ } from "@aws-sdk/types";
import { _LocationListEntry } from "./_LocationListEntry";

export const _LocationList: _List_ = {
  type: "list",
  member: {
    shape: _LocationListEntry
  }
};
