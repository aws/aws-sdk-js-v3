import { List as _List_ } from "@aws-sdk/types";
import { _AttributeValueTarget } from "./_AttributeValueTarget";

export const _AttributeValueList: _List_ = {
  type: "list",
  member: {
    shape: _AttributeValueTarget,
    locationName: "AttributeValueTarget"
  }
};
