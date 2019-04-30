import { List as _List_ } from "@aws-sdk/types";

export const _AttributeNameList: _List_ = {
  type: "list",
  flattened: true,
  member: {
    shape: {
      type: "string"
    },
    locationName: "AttributeName"
  }
};
