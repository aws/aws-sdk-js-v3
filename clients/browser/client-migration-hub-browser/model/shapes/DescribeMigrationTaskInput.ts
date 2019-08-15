import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMigrationTaskInput: _Structure_ = {
  type: "structure",
  required: ["ProgressUpdateStream", "MigrationTaskName"],
  members: {
    ProgressUpdateStream: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MigrationTaskName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
