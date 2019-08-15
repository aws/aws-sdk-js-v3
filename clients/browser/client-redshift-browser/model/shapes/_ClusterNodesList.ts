import { List as _List_ } from "@aws-sdk/types";
import { _ClusterNode } from "./_ClusterNode";

export const _ClusterNodesList: _List_ = {
  type: "list",
  member: {
    shape: _ClusterNode
  }
};
