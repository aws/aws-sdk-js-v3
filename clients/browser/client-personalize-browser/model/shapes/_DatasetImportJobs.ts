import { List as _List_ } from "@aws-sdk/types";
import { _DatasetImportJobSummary } from "./_DatasetImportJobSummary";

export const _DatasetImportJobs: _List_ = {
  type: "list",
  member: {
    shape: _DatasetImportJobSummary
  }
};
