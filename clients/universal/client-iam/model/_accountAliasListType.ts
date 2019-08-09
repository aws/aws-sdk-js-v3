import { List as _List_ } from "@aws-sdk/types";

export const _accountAliasListType: _List_ = {
  type: "list",
  member: {
    shape: {
      type: "string",
      min: 3
    }
  }
};
