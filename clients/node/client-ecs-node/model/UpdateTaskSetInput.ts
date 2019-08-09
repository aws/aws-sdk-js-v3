import { _Scale } from "./_Scale";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTaskSetInput: _Structure_ = {
  type: "structure",
  required: ["cluster", "service", "taskSet", "scale"],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    service: {
      shape: {
        type: "string"
      }
    },
    taskSet: {
      shape: {
        type: "string"
      }
    },
    scale: {
      shape: _Scale
    }
  }
};
