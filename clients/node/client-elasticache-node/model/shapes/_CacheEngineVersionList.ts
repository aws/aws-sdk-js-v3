import { List as _List_ } from "@aws-sdk/types";
import { _CacheEngineVersion } from "./_CacheEngineVersion";

export const _CacheEngineVersionList: _List_ = {
  type: "list",
  member: {
    shape: _CacheEngineVersion,
    locationName: "CacheEngineVersion"
  }
};
