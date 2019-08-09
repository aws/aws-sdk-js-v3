import { _NodeList } from "./_NodeList";
import { _EdgeList } from "./_EdgeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowGraph: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Nodes: {
      shape: _NodeList
    },
    Edges: {
      shape: _EdgeList
    }
  }
};
