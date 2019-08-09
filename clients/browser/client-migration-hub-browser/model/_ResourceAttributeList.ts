import { List as _List_ } from "@aws-sdk/types";
import { _ResourceAttribute } from "./_ResourceAttribute";

export const _ResourceAttributeList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ResourceAttribute
  }
};
