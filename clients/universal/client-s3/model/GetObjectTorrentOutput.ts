import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetObjectTorrentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Body: {
      shape: {
        type: "blob"
      },
      streaming: true
    },
    RequestCharged: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-request-charged"
    }
  },
  payload: "Body"
};
