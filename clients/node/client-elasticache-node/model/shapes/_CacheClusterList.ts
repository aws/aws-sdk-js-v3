import { List as _List_ } from "@aws-sdk/types";
import { _CacheCluster } from "./_CacheCluster";

export const _CacheClusterList: _List_ = {
  type: "list",
  member: {
    shape: _CacheCluster,
    locationName: "CacheCluster"
  }
};
