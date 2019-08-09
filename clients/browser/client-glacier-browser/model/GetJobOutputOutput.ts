import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetJobOutputOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    body: {
      shape: {
        type: "blob",
        streaming: true
      }
    },
    checksum: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-sha256-tree-hash"
    },
    status: {
      shape: {
        type: "integer"
      },
      location: "statusCode"
    },
    contentRange: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Range"
    },
    acceptRanges: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Accept-Ranges"
    },
    contentType: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Type"
    },
    archiveDescription: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-archive-description"
    }
  },
  payload: "body"
};
