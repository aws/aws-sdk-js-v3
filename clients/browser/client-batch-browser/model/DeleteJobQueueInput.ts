import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteJobQueueInput: _Structure_ = {
  type: "structure",
  required: ["jobQueue"],
  members: {
    jobQueue: {
      shape: {
        type: "string"
      }
    }
  }
};
