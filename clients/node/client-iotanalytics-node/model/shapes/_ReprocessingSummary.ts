import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReprocessingSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    creationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
