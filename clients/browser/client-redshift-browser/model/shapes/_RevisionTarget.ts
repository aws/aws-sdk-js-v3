import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RevisionTarget: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DatabaseRevision: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    DatabaseRevisionReleaseDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
