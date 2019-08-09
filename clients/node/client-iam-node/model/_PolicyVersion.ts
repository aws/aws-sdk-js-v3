import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyVersion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Document: {
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
    IsDefaultVersion: {
      shape: {
        type: "boolean"
      }
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
