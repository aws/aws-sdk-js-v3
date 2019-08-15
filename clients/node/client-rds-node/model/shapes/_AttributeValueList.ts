import { List as _List_ } from "@aws-sdk/types";

export const _AttributeValueList: _List_ = {
  type: "list",
  member: {
    shape: {
      type: "string"
    },
    locationName: "AttributeValue"
  }
};
