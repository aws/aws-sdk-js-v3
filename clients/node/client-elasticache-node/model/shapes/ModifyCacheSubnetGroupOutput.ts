import { _CacheSubnetGroup } from "./_CacheSubnetGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyCacheSubnetGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheSubnetGroup: {
      shape: _CacheSubnetGroup
    }
  }
};
