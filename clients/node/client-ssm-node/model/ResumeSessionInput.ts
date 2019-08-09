import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResumeSessionInput: _Structure_ = {
  type: "structure",
  required: ["SessionId"],
  members: {
    SessionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
