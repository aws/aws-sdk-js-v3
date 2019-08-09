import { List as _List_ } from "@aws-sdk/types";
import { _DnsEntry } from "./_DnsEntry";

export const _DnsEntrySet: _List_ = {
  type: "list",
  member: {
    shape: _DnsEntry,
    locationName: "item"
  }
};
