import { List as _List_ } from "@aws-sdk/types";
import { _UnmappedAttribute } from "./_UnmappedAttribute";

export const _UnmappedAttributeList: _List_ = {
  type: "list",
  member: {
    shape: _UnmappedAttribute
  }
};
