import { _CacheParameterGroup } from "./_CacheParameterGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCacheParameterGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheParameterGroup: {
      shape: _CacheParameterGroup
    }
  }
};
