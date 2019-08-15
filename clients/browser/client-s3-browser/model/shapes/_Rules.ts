import { List as _List_ } from "@aws-sdk/types";
import { _Rule } from "./_Rule";

export const _Rules: _List_ = {
  type: "list",
  flattened: true,
  member: {
    shape: _Rule
  }
};
