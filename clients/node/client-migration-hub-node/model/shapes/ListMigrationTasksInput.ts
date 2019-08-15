import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMigrationTasksInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ResourceName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
