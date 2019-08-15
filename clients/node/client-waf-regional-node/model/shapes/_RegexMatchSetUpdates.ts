import { List as _List_ } from "@aws-sdk/types";
import { _RegexMatchSetUpdate } from "./_RegexMatchSetUpdate";

export const _RegexMatchSetUpdates: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _RegexMatchSetUpdate
  }
};
