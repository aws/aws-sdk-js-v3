import { List as _List_ } from "@aws-sdk/types";
import { _CacheNodeTypeSpecificValue } from "./_CacheNodeTypeSpecificValue";

export const _CacheNodeTypeSpecificValueList: _List_ = {
  type: "list",
  member: {
    shape: _CacheNodeTypeSpecificValue,
    locationName: "CacheNodeTypeSpecificValue"
  }
};
