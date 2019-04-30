import { _Owner } from "./_Owner";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Object: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LastModified: {
      shape: {
        type: "timestamp"
      }
    },
    ETag: {
      shape: {
        type: "string"
      }
    },
    Size: {
      shape: {
        type: "integer"
      }
    },
    StorageClass: {
      shape: {
        type: "string"
      }
    },
    Owner: {
      shape: _Owner
    }
  }
};
