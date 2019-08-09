import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateJobPriorityOutput: _Structure_ = {
  type: "structure",
  required: ["JobId", "Priority"],
  members: {
    JobId: {
      shape: {
        type: "string",
        min: 5
      }
    },
    Priority: {
      shape: {
        type: "integer"
      }
    }
  }
};
