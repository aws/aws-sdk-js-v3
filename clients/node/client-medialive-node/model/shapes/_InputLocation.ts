import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputLocation: _Structure_ = {
  type: "structure",
  required: ["Uri"],
  members: {
    PasswordParam: {
      shape: {
        type: "string"
      },
      locationName: "passwordParam"
    },
    Uri: {
      shape: {
        type: "string"
      },
      locationName: "uri"
    },
    Username: {
      shape: {
        type: "string"
      },
      locationName: "username"
    }
  }
};
