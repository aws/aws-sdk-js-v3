import { List as _List_ } from "@aws-sdk/types";
import { _MessageTag } from "./_MessageTag";

export const _MessageTagList: _List_ = {
  type: "list",
  member: {
    shape: _MessageTag
  }
};
