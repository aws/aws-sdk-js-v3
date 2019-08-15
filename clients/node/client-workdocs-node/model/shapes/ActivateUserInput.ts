import { Structure as _Structure_ } from "@aws-sdk/types";

export const ActivateUserInput: _Structure_ = {
  type: "structure",
  required: ["UserId"],
  members: {
    UserId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "UserId"
    },
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
