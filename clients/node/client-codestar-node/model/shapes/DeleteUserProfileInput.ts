import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteUserProfileInput: _Structure_ = {
  type: "structure",
  required: ["userArn"],
  members: {
    userArn: {
      shape: {
        type: "string",
        min: 32
      }
    }
  }
};
