import { List as _List_ } from "@aws-sdk/types";
import { _Table } from "./_Table";

export const _TableList: _List_ = {
  type: "list",
  member: {
    shape: _Table
  }
};
