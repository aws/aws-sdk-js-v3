import { _ObjectList } from "./_ObjectList";
import { _CommonPrefixList } from "./_CommonPrefixList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListObjectsV2Output: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Contents: {
      shape: _ObjectList
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Prefix: {
      shape: {
        type: "string"
      }
    },
    Delimiter: {
      shape: {
        type: "string"
      }
    },
    MaxKeys: {
      shape: {
        type: "integer"
      }
    },
    CommonPrefixes: {
      shape: _CommonPrefixList
    },
    EncodingType: {
      shape: {
        type: "string"
      }
    },
    KeyCount: {
      shape: {
        type: "integer"
      }
    },
    ContinuationToken: {
      shape: {
        type: "string"
      }
    },
    NextContinuationToken: {
      shape: {
        type: "string"
      }
    },
    StartAfter: {
      shape: {
        type: "string"
      }
    }
  }
};
