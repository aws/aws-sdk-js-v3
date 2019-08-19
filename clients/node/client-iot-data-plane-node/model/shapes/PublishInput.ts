import { Structure as _Structure_ } from "@aws-sdk/types";

export const PublishInput: _Structure_ = {
  type: "structure",
  required: ["topic"],
  members: {
    topic: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "topic"
    },
    qos: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "qos"
    },
    payload: {
      shape: {
        type: "blob"
      }
    }
  },
  payload: "payload"
};
