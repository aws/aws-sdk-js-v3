import { List as _List_ } from "@aws-sdk/types";
import { _Statement } from "./_Statement";

export const _StatementListType: _List_ = {
  type: "list",
  member: {
    shape: _Statement
  }
};
