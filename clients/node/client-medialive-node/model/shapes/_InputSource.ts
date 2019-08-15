import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputSource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PasswordParam: {
      shape: {
        type: "string"
      },
      locationName: "passwordParam"
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
