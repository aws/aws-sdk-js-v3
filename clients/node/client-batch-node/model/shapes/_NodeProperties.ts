import { _NodeRangeProperties } from "./_NodeRangeProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodeProperties: _Structure_ = {
  type: "structure",
  required: ["numNodes", "mainNode", "nodeRangeProperties"],
  members: {
    numNodes: {
      shape: {
        type: "integer"
      }
    },
    mainNode: {
      shape: {
        type: "integer"
      }
    },
    nodeRangeProperties: {
      shape: _NodeRangeProperties
    }
  }
};
