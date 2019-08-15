import { List as _List_ } from "@aws-sdk/types";
import { _SecretListEntry } from "./_SecretListEntry";

export const _SecretListType: _List_ = {
  type: "list",
  member: {
    shape: _SecretListEntry
  }
};
