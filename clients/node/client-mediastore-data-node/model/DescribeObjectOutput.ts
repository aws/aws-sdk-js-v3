import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeObjectOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ETag: {
      shape: {
        type: "string",
        min: 1
      },
      location: "header",
      locationName: "ETag"
    },
    ContentType: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Type"
    },
    ContentLength: {
      shape: {
        type: "integer"
      },
      location: "header",
      locationName: "Content-Length"
    },
    CacheControl: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Cache-Control"
    },
    LastModified: {
      shape: {
        type: "timestamp"
      },
      location: "header",
      locationName: "Last-Modified"
    }
  }
};
