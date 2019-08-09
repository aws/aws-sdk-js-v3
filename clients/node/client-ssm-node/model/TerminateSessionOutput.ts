import { Structure as _Structure_ } from "@aws-sdk/types";

export const TerminateSessionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SessionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
