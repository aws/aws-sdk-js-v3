import { List as _List_ } from "@aws-sdk/types";
import { _ByteMatchSetUpdate } from "./_ByteMatchSetUpdate";

export const _ByteMatchSetUpdates: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ByteMatchSetUpdate
  }
};
