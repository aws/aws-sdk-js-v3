import { List as _List_ } from "@aws-sdk/types";
import { _HostEntry } from "./_HostEntry";

export const _HostEntryList: _List_ = {
  type: "list",
  member: {
    shape: _HostEntry
  }
};
