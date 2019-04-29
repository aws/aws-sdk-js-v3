import { _Owner } from "./_Owner";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeleteMarkerEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Owner: {
      shape: _Owner
    },
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VersionId: {
      shape: {
        type: "string"
      }
    },
    IsLatest: {
      shape: {
        type: "boolean"
      }
    },
    LastModified: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
