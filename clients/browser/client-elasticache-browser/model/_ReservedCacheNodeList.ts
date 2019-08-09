import { List as _List_ } from "@aws-sdk/types";
import { _ReservedCacheNode } from "./_ReservedCacheNode";

export const _ReservedCacheNodeList: _List_ = {
  type: "list",
  member: {
    shape: _ReservedCacheNode,
    locationName: "ReservedCacheNode"
  }
};
