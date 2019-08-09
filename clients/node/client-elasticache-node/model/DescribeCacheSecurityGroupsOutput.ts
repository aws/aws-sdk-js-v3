import { _CacheSecurityGroups } from "./_CacheSecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCacheSecurityGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    CacheSecurityGroups: {
      shape: _CacheSecurityGroups
    }
  }
};
