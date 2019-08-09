import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetObjectOutput: _Structure_ = {
  type: "structure",
  required: ["StatusCode"],
  members: {
    Body: {
      shape: {
        type: "blob",
        streaming: true
      }
    },
    CacheControl: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Cache-Control"
    },
    ContentRange: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Range"
    },
    ContentLength: {
      shape: {
        type: "integer"
      },
      location: "header",
      locationName: "Content-Length"
    },
    ContentType: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-Type"
    },
    ETag: {
      shape: {
        type: "string",
        min: 1
      },
      location: "header",
      locationName: "ETag"
    },
    LastModified: {
      shape: {
        type: "timestamp"
      },
      location: "header",
      locationName: "Last-Modified"
    },
    StatusCode: {
      shape: {
        type: "integer"
      },
      location: "statusCode"
    }
  },
  payload: "Body"
};
