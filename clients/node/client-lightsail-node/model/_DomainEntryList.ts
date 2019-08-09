import { List as _List_ } from "@aws-sdk/types";
import { _DomainEntry } from "./_DomainEntry";

export const _DomainEntryList: _List_ = {
  type: "list",
  member: {
    shape: _DomainEntry
  }
};
