import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Transcript: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TranscriptFileUri: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
