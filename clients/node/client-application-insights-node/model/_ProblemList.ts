import { List as _List_ } from "@aws-sdk/types";
import { _Problem } from "./_Problem";

export const _ProblemList: _List_ = {
  type: "list",
  member: {
    shape: _Problem
  }
};
