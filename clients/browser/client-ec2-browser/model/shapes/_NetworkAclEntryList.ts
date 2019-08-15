import { List as _List_ } from "@aws-sdk/types";
import { _NetworkAclEntry } from "./_NetworkAclEntry";

export const _NetworkAclEntryList: _List_ = {
  type: "list",
  member: {
    shape: _NetworkAclEntry,
    locationName: "item"
  }
};
