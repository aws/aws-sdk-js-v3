import { Structure as _Structure_ } from "@aws-sdk/types";

export const RecordActivityTaskHeartbeatOutput: _Structure_ = {
  type: "structure",
  required: ["cancelRequested"],
  members: {
    cancelRequested: {
      shape: {
        type: "boolean"
      }
    }
  }
};
