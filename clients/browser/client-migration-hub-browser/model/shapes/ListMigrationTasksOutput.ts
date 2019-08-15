import { _MigrationTaskSummaryList } from "./_MigrationTaskSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMigrationTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MigrationTaskSummaryList: {
      shape: _MigrationTaskSummaryList
    }
  }
};
