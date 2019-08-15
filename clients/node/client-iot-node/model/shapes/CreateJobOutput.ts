import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobArn: {
      shape: {
        type: "string"
      }
    },
    jobId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string"
      }
    }
  }
};
