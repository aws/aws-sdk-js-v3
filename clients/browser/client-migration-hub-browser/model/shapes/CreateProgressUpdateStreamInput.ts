import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProgressUpdateStreamInput: _Structure_ = {
  type: "structure",
  required: ["ProgressUpdateStreamName"],
  members: {
    ProgressUpdateStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
