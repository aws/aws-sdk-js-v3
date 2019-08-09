import { List as _List_ } from "@aws-sdk/types";
import { _CacheNodeTypeSpecificParameter } from "./_CacheNodeTypeSpecificParameter";

export const _CacheNodeTypeSpecificParametersList: _List_ = {
  type: "list",
  member: {
    shape: _CacheNodeTypeSpecificParameter,
    locationName: "CacheNodeTypeSpecificParameter"
  }
};
