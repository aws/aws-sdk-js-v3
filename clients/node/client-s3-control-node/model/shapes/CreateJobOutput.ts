import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobId: {
      shape: {
        type: "string",
        min: 5
      }
    }
  }
};
