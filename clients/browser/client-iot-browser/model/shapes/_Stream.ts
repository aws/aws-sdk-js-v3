import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Stream: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    streamId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    fileId: {
      shape: {
        type: "integer"
      }
    }
  }
};
