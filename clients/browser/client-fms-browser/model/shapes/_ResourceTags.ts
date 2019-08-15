import { List as _List_ } from "@aws-sdk/types";
import { _ResourceTag } from "./_ResourceTag";

export const _ResourceTags: _List_ = {
  type: "list",
  member: {
    shape: _ResourceTag
  }
};
