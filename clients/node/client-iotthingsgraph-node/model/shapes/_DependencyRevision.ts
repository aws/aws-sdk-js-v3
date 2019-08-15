import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DependencyRevision: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    revisionNumber: {
      shape: {
        type: "integer"
      }
    }
  }
};
