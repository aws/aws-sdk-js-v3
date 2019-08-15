import { List as _List_ } from "@aws-sdk/types";
import { _CustomKeyStoresListEntry } from "./_CustomKeyStoresListEntry";

export const _CustomKeyStoresList: _List_ = {
  type: "list",
  member: {
    shape: _CustomKeyStoresListEntry
  }
};
