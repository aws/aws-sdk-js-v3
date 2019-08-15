import { List as _List_ } from "@aws-sdk/types";
import { _SolutionVersionSummary } from "./_SolutionVersionSummary";

export const _SolutionVersions: _List_ = {
  type: "list",
  member: {
    shape: _SolutionVersionSummary
  }
};
