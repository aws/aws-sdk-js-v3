import { _CacheEngineVersionList } from "./_CacheEngineVersionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCacheEngineVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    CacheEngineVersions: {
      shape: _CacheEngineVersionList
    }
  }
};
