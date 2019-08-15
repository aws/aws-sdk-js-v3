import { List as _List_ } from "@aws-sdk/types";
import { _AttributeKey } from "./_AttributeKey";

export const _AttributeKeyList: _List_ = {
  type: "list",
  member: {
    shape: _AttributeKey
  }
};
