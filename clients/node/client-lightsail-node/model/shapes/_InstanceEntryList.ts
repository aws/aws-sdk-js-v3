import { List as _List_ } from "@aws-sdk/types";
import { _InstanceEntry } from "./_InstanceEntry";

export const _InstanceEntryList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceEntry
  }
};
