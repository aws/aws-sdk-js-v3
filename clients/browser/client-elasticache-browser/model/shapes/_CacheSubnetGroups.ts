import { List as _List_ } from "@aws-sdk/types";
import { _CacheSubnetGroup } from "./_CacheSubnetGroup";

export const _CacheSubnetGroups: _List_ = {
  type: "list",
  member: {
    shape: _CacheSubnetGroup,
    locationName: "CacheSubnetGroup"
  }
};
