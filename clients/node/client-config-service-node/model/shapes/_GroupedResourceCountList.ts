import { List as _List_ } from "@aws-sdk/types";
import { _GroupedResourceCount } from "./_GroupedResourceCount";

export const _GroupedResourceCountList: _List_ = {
  type: "list",
  member: {
    shape: _GroupedResourceCount
  }
};
