import { List as _List_ } from "@aws-sdk/types";
import { _AttributeType } from "./_AttributeType";

export const _AttributeListType: _List_ = {
  type: "list",
  member: {
    shape: _AttributeType
  }
};
