import { Structure as _Structure_ } from "@aws-sdk/types";

export const RecordActivityTaskHeartbeatInput: _Structure_ = {
  type: "structure",
  required: ["taskToken"],
  members: {
    taskToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    details: {
      shape: {
        type: "string"
      }
    }
  }
};
