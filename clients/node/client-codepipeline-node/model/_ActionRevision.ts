import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActionRevision: _Structure_ = {
  type: "structure",
  required: ["revisionId", "revisionChangeId", "created"],
  members: {
    revisionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    revisionChangeId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    created: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
