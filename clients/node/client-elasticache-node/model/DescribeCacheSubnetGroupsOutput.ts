import { _CacheSubnetGroups } from "./_CacheSubnetGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCacheSubnetGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    CacheSubnetGroups: {
      shape: _CacheSubnetGroups
    }
  }
};
