import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCreatedArtifactsInput: _Structure_ = {
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
    },
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
    }
  }
};
