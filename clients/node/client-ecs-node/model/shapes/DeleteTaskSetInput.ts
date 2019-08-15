import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTaskSetInput: _Structure_ = {
  type: "structure",
  required: ["cluster", "service", "taskSet"],
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
    force: {
      shape: {
        type: "boolean"
      }
    }
  }
};
