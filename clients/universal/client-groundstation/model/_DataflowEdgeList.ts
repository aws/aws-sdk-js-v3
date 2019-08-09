import { List as _List_ } from "@aws-sdk/types";
import { _DataflowEdge } from "./_DataflowEdge";

export const _DataflowEdgeList: _List_ = {
  type: "list",
  member: {
    shape: _DataflowEdge
  }
};
