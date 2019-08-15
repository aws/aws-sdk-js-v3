import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelTaskExecutionInput: _Structure_ = {
  type: "structure",
  required: ["TaskExecutionArn"],
  members: {
    TaskExecutionArn: {
      shape: {
        type: "string"
      }
    }
  }
};
