import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTranscriptionJobInput: _Structure_ = {
  type: "structure",
  required: ["TranscriptionJobName"],
  members: {
    TranscriptionJobName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
