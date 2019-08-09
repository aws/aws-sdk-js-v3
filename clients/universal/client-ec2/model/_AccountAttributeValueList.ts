import { List as _List_ } from "@aws-sdk/types";
import { _AccountAttributeValue } from "./_AccountAttributeValue";

export const _AccountAttributeValueList: _List_ = {
  type: "list",
  member: {
    shape: _AccountAttributeValue,
    locationName: "item"
  }
};
