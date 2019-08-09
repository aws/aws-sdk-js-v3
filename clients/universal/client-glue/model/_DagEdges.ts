import { List as _List_ } from "@aws-sdk/types";
import { _CodeGenEdge } from "./_CodeGenEdge";

export const _DagEdges: _List_ = {
  type: "list",
  member: {
    shape: _CodeGenEdge
  }
};
