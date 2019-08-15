import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteUserProfileInput: _Structure_ = {
  type: "structure",
  required: ["IamUserArn"],
  members: {
    IamUserArn: {
      shape: {
        type: "string"
      }
    }
  }
};
