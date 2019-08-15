import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobDependency: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobId: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    }
  }
};
