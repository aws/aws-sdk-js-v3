import { _CacheSecurityGroup } from "./_CacheSecurityGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCacheSecurityGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheSecurityGroup: {
      shape: _CacheSecurityGroup
    }
  }
};
