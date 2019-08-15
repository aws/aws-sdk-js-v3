import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCurrentUserInput: _Structure_ = {
  type: "structure",
  required: ["AuthenticationToken"],
  members: {
    AuthenticationToken: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      },
      location: "header",
      locationName: "Authentication"
    }
  }
};
