import { List as _List_ } from "@aws-sdk/types";
import { _HTTPHeader } from "./_HTTPHeader";

export const _HTTPHeaders: _List_ = {
  type: "list",
  member: {
    shape: _HTTPHeader
  }
};
