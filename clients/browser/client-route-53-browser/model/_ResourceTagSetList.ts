import { List as _List_ } from "@aws-sdk/types";
import { _ResourceTagSet } from "./_ResourceTagSet";

export const _ResourceTagSetList: _List_ = {
  type: "list",
  member: {
    shape: _ResourceTagSet,
    locationName: "ResourceTagSet"
  }
};
