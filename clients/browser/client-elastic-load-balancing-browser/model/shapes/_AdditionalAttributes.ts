import { List as _List_ } from "@aws-sdk/types";
import { _AdditionalAttribute } from "./_AdditionalAttribute";

export const _AdditionalAttributes: _List_ = {
  type: "list",
  member: {
    shape: _AdditionalAttribute
  }
};
