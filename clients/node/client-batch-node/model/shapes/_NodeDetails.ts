import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodeDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    nodeIndex: {
      shape: {
        type: "integer"
      }
    },
    isMainNode: {
      shape: {
        type: "boolean"
      }
    }
  }
};
