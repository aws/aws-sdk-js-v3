import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodePropertiesSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    isMainNode: {
      shape: {
        type: "boolean"
      }
    },
    numNodes: {
      shape: {
        type: "integer"
      }
    },
    nodeIndex: {
      shape: {
        type: "integer"
      }
    }
  }
};
