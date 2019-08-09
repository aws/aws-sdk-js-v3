import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateMyUserProfileInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SshPublicKey: {
      shape: {
        type: "string"
      }
    }
  }
};
