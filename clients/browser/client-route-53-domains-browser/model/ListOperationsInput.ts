import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOperationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SubmittedSince: {
      shape: {
        type: "timestamp"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    MaxItems: {
      shape: {
        type: "integer"
      }
    }
  }
};
