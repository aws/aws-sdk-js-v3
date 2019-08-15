import { _JobUpdate } from "./_JobUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateJobInput: _Structure_ = {
  type: "structure",
  required: ["JobName", "JobUpdate"],
  members: {
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobUpdate: {
      shape: _JobUpdate
    }
  }
};
