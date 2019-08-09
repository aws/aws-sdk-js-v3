import { List as _List_ } from "@aws-sdk/types";
import { _SecretVersionsListEntry } from "./_SecretVersionsListEntry";

export const _SecretVersionsListType: _List_ = {
  type: "list",
  member: {
    shape: _SecretVersionsListEntry
  }
};
