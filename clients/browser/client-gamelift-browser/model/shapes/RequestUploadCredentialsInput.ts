import { Structure as _Structure_ } from "@aws-sdk/types";

export const RequestUploadCredentialsInput: _Structure_ = {
  type: "structure",
  required: ["BuildId"],
  members: {
    BuildId: {
      shape: {
        type: "string"
      }
    }
  }
};
