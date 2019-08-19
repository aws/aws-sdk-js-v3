import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutObjectInput: _Structure_ = {
  type: "structure",
  required: ["Body", "Path"],
  members: {
    Body: {
      shape: {
        type: "blob",
        streaming: true
      }
    },
    Path: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "Path"
    },
    ContentType: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Type"
    },
    CacheControl: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Cache-Control"
    },
    StorageClass: {
      shape: {
        type: "string",
        min: 1
      },
      location: "header",
      locationName: "x-amz-storage-class"
    },
    UploadAvailability: {
      shape: {
        type: "string",
        min: 1
      },
      location: "header",
      locationName: "x-amz-upload-availability"
    }
  },
  payload: "Body"
};
