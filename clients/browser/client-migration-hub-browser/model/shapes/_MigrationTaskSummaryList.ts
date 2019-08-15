import { List as _List_ } from "@aws-sdk/types";
import { _MigrationTaskSummary } from "./_MigrationTaskSummary";

export const _MigrationTaskSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _MigrationTaskSummary
  }
};
