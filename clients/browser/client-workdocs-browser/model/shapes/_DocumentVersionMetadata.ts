import { _DocumentThumbnailUrlMap } from "./_DocumentThumbnailUrlMap";
import { _DocumentSourceUrlMap } from "./_DocumentSourceUrlMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DocumentVersionMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
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
    Size: {
      shape: {
        type: "integer"
      }
    },
    Signature: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CreatedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    ModifiedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    ContentCreatedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    ContentModifiedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    CreatorId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Thumbnail: {
      shape: _DocumentThumbnailUrlMap
    },
    Source: {
      shape: _DocumentSourceUrlMap
    }
  }
};
