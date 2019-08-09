import { _NodePropertyOverrides } from "./_NodePropertyOverrides";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodeOverrides: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    numNodes: {
      shape: {
        type: "integer"
      }
    },
    nodePropertyOverrides: {
      shape: _NodePropertyOverrides
    }
  }
};
