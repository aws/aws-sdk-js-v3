import { List as _List_ } from "@aws-sdk/types";
import { _CacheParameterGroup } from "./_CacheParameterGroup";

export const _CacheParameterGroupList: _List_ = {
  type: "list",
  member: {
    shape: _CacheParameterGroup,
    locationName: "CacheParameterGroup"
  }
};
