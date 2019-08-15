import { List as _List_ } from "@aws-sdk/types";
import { _AttributeKeyAndValue } from "./_AttributeKeyAndValue";

export const _AttributeKeyAndValueList: _List_ = {
  type: "list",
  member: {
    shape: _AttributeKeyAndValue
  }
};
