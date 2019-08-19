import { List as _List_ } from "@aws-sdk/types";
import { _ResultAttribute } from "./_ResultAttribute";

export const _ResultAttributeList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ResultAttribute
  }
};
