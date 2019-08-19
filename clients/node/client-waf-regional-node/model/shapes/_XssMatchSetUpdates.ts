import { List as _List_ } from "@aws-sdk/types";
import { _XssMatchSetUpdate } from "./_XssMatchSetUpdate";

export const _XssMatchSetUpdates: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _XssMatchSetUpdate
  }
};
