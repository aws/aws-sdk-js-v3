import { Structure as _Structure_ } from "@aws-sdk/types";

export const SubmitJobOutput: _Structure_ = {
  type: "structure",
  required: ["jobName", "jobId"],
  members: {
    jobName: {
      shape: {
        type: "string"
      }
    },
    jobId: {
      shape: {
        type: "string"
      }
    }
  }
};
