import { _NodeSummaryList } from "./_NodeSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListNodesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Nodes: {
      shape: _NodeSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
