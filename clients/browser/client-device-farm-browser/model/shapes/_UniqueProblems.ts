import { List as _List_ } from "@aws-sdk/types";
import { _UniqueProblem } from "./_UniqueProblem";

export const _UniqueProblems: _List_ = {
  type: "list",
  member: {
    shape: _UniqueProblem
  }
};
