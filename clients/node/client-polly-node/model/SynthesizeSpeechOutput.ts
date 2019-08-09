import { Structure as _Structure_ } from "@aws-sdk/types";

export const SynthesizeSpeechOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AudioStream: {
      shape: {
        type: "blob",
        streaming: true
      }
    },
    ContentType: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Type"
    },
    RequestCharacters: {
      shape: {
        type: "integer"
      },
      location: "header",
      locationName: "x-amzn-RequestCharacters"
    }
  },
  payload: "AudioStream"
};
