import { List as _List_ } from "@aws-sdk/types";
import { _RecordTag } from "./_RecordTag";

export const _RecordTags: _List_ = {
  type: "list",
  member: {
    shape: _RecordTag
  }
};
