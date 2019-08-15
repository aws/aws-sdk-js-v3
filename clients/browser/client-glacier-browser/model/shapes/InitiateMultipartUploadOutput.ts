import { Structure as _Structure_ } from "@aws-sdk/types";

export const InitiateMultipartUploadOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    location: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Location"
    },
    uploadId: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-multipart-upload-id"
    }
  }
};
