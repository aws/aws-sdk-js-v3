import { _CacheParameterGroupList } from "./_CacheParameterGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCacheParameterGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    CacheParameterGroups: {
      shape: _CacheParameterGroupList
    }
  }
};
