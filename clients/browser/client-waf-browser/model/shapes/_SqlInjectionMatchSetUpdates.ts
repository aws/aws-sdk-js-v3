import { List as _List_ } from "@aws-sdk/types";
import { _SqlInjectionMatchSetUpdate } from "./_SqlInjectionMatchSetUpdate";

export const _SqlInjectionMatchSetUpdates: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _SqlInjectionMatchSetUpdate
  }
};
