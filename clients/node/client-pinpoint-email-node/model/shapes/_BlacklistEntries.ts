import { List as _List_ } from "@aws-sdk/types";
import { _BlacklistEntry } from "./_BlacklistEntry";

export const _BlacklistEntries: _List_ = {
  type: "list",
  member: {
    shape: _BlacklistEntry
  }
};
