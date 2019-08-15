import { List as _List_ } from "@aws-sdk/types";
import { _CacheNode } from "./_CacheNode";

export const _CacheNodeList: _List_ = {
  type: "list",
  member: {
    shape: _CacheNode,
    locationName: "CacheNode"
  }
};
