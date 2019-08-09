import { _MigrationTask } from "./_MigrationTask";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMigrationTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MigrationTask: {
      shape: _MigrationTask
    }
  }
};
