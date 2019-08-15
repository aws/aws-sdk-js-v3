import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopTaskInput: _Structure_ = {
  type: "structure",
  required: ["task"],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    task: {
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
