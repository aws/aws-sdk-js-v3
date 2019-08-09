import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputDestinationSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PasswordParam: {
      shape: {
        type: "string"
      },
      locationName: "passwordParam"
    },
    StreamName: {
      shape: {
        type: "string"
      },
      locationName: "streamName"
    },
    Url: {
      shape: {
        type: "string"
      },
      locationName: "url"
    },
    Username: {
      shape: {
        type: "string"
      },
      locationName: "username"
    }
  }
};
