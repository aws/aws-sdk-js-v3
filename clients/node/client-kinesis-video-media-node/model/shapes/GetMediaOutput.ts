import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMediaOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ContentType: {
      shape: {
        type: "string",
        min: 1
      },
      location: "header",
      locationName: "Content-Type"
    },
    Payload: {
      shape: {
        type: "blob",
        streaming: true
      }
    }
  },
  payload: "Payload"
};
