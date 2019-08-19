import { List as _List_ } from "@aws-sdk/types";
import { _CacheBehavior } from "./_CacheBehavior";

export const _CacheBehaviorList: _List_ = {
  type: "list",
  member: {
    shape: _CacheBehavior,
    locationName: "CacheBehavior"
  }
};
