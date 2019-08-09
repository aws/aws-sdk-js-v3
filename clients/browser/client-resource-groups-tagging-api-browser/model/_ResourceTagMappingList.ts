import { List as _List_ } from "@aws-sdk/types";
import { _ResourceTagMapping } from "./_ResourceTagMapping";

export const _ResourceTagMappingList: _List_ = {
  type: "list",
  member: {
    shape: _ResourceTagMapping
  }
};
