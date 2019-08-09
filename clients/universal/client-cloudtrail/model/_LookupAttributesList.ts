import { List as _List_ } from "@aws-sdk/types";
import { _LookupAttribute } from "./_LookupAttribute";

export const _LookupAttributesList: _List_ = {
  type: "list",
  member: {
    shape: _LookupAttribute
  }
};
