import { List as _List_ } from "@aws-sdk/types";
import { _BatchDescribeMergeConflictsError } from "./_BatchDescribeMergeConflictsError";

export const _BatchDescribeMergeConflictsErrors: _List_ = {
  type: "list",
  member: {
    shape: _BatchDescribeMergeConflictsError
  }
};
