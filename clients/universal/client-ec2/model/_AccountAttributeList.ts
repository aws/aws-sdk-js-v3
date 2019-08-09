import { List as _List_ } from "@aws-sdk/types";
import { _AccountAttribute } from "./_AccountAttribute";

export const _AccountAttributeList: _List_ = {
  type: "list",
  member: {
    shape: _AccountAttribute,
    locationName: "item"
  }
};
