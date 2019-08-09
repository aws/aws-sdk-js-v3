import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyVersion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    versionId: {
      shape: {
        type: "string"
      }
    },
    isDefaultVersion: {
      shape: {
        type: "boolean"
      }
    },
    createDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
