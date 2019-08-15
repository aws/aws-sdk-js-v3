import { _TranscriptionJob } from "./_TranscriptionJob";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTranscriptionJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TranscriptionJob: {
      shape: _TranscriptionJob
    }
  }
};
