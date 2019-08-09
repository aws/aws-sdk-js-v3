import { List as _List_ } from "@aws-sdk/types";
import { _AttributeNameAndValue } from "./_AttributeNameAndValue";

export const _AttributeNameAndValueList: _List_ = {
  type: "list",
  member: {
    shape: _AttributeNameAndValue
  }
};
