import { List as _List_ } from "@aws-sdk/types";
import { _Assignment } from "./_Assignment";

export const _AssignmentList: _List_ = {
  type: "list",
  member: {
    shape: _Assignment
  }
};
