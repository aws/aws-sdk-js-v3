import { List as _List_ } from "@aws-sdk/types";
import { _SchemaAttributeType } from "./_SchemaAttributeType";

export const _SchemaAttributesListType: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _SchemaAttributeType
  }
};
