import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DatasetContentStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    state: {
      shape: {
        type: "string"
      }
    },
    reason: {
      shape: {
        type: "string"
      }
    }
  }
};
