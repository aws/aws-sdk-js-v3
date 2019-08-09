import { List as _List_ } from "@aws-sdk/types";
import { _ResourceIdentifier } from "./_ResourceIdentifier";

export const _ResourceIdentifierList: _List_ = {
  type: "list",
  member: {
    shape: _ResourceIdentifier
  }
};
