import { List as _List_ } from "@aws-sdk/types";
import { _CodeGenNode } from "./_CodeGenNode";

export const _DagNodes: _List_ = {
  type: "list",
  member: {
    shape: _CodeGenNode
  }
};
