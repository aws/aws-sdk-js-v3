import { List as _List_ } from "@aws-sdk/types";
import { _ThingAttribute } from "./_ThingAttribute";

export const _ThingAttributeList: _List_ = {
  type: "list",
  member: {
    shape: _ThingAttribute
  }
};
