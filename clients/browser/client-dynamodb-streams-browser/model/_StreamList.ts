import { List as _List_ } from "@aws-sdk/types";
import { _Stream } from "./_Stream";

export const _StreamList: _List_ = {
  type: "list",
  member: {
    shape: _Stream
  }
};
