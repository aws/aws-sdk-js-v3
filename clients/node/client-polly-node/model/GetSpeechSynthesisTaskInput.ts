import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSpeechSynthesisTaskInput: _Structure_ = {
  type: "structure",
  required: ["TaskId"],
  members: {
    TaskId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "TaskId"
    }
  }
};
