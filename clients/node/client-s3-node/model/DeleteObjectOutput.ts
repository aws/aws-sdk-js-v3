import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteObjectOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeleteMarker: {
      shape: {
        type: "boolean"
      },
      location: "header",
      locationName: "x-amz-delete-marker"
    },
    VersionId: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-version-id"
    },
    RequestCharged: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-request-charged"
    }
  }
};
