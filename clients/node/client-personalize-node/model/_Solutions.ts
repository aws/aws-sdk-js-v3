import { List as _List_ } from "@aws-sdk/types";
import { _SolutionSummary } from "./_SolutionSummary";

export const _Solutions: _List_ = {
  type: "list",
  member: {
    shape: _SolutionSummary
  }
};
