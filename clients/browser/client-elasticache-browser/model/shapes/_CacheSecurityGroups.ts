import { List as _List_ } from "@aws-sdk/types";
import { _CacheSecurityGroup } from "./_CacheSecurityGroup";

export const _CacheSecurityGroups: _List_ = {
  type: "list",
  member: {
    shape: _CacheSecurityGroup,
    locationName: "CacheSecurityGroup"
  }
};
