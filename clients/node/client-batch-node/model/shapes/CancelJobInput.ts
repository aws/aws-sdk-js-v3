import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelJobInput: _Structure_ = {
  type: "structure",
  required: ["jobId", "reason"],
  members: {
    jobId: {
      shape: {
        type: "string"
      }
    },
    reason: {
      shape: {
        type: "string"
      }
    }
  }
};
