import { Structure as _Structure_ } from "@aws-sdk/types";

export const UploadArchiveOutput: _Structure_ = {
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
    checksum: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-sha256-tree-hash"
    },
    archiveId: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-archive-id"
    }
  }
};
