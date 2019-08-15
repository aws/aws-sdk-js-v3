import { List as _List_ } from "@aws-sdk/types";
import { _ClusterListEntry } from "./_ClusterListEntry";

export const _ClusterListEntryList: _List_ = {
  type: "list",
  member: {
    shape: _ClusterListEntry
  }
};
