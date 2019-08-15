import { List as _List_ } from "@aws-sdk/types";
import { _CompilationJobSummary } from "./_CompilationJobSummary";

export const _CompilationJobSummaries: _List_ = {
  type: "list",
  member: {
    shape: _CompilationJobSummary
  }
};
