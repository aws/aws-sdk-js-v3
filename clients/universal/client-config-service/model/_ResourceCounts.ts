import { List as _List_ } from "@aws-sdk/types";
import { _ResourceCount } from "./_ResourceCount";

export const _ResourceCounts: _List_ = {
  type: "list",
  member: {
    shape: _ResourceCount
  }
};
