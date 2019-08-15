import { List as _List_ } from "@aws-sdk/types";
import { _tagSet } from "./_tagSet";

export const _tagFilter: _List_ = {
  type: "list",
  member: {
    shape: _tagSet
  }
};
