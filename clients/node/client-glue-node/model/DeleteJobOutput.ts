import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
