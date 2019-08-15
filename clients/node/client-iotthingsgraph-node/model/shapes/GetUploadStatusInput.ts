import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUploadStatusInput: _Structure_ = {
  type: "structure",
  required: ["uploadId"],
  members: {
    uploadId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
