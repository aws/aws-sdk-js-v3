import { _S3UserMetadata } from "./_S3UserMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3ObjectMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheControl: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ContentDisposition: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ContentEncoding: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ContentLanguage: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserMetadata: {
      shape: _S3UserMetadata
    },
    ContentLength: {
      shape: {
        type: "integer"
      }
    },
    ContentMD5: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ContentType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HttpExpiresDate: {
      shape: {
        type: "timestamp"
      }
    },
    RequesterCharged: {
      shape: {
        type: "boolean"
      }
    },
    SSEAlgorithm: {
      shape: {
        type: "string"
      }
    }
  }
};
