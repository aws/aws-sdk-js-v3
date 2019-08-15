import { List as _List_ } from "@aws-sdk/types";
import { _GroupIdentifier } from "./_GroupIdentifier";

export const _GroupIdentifierList: _List_ = {
  type: "list",
  member: {
    shape: _GroupIdentifier,
    locationName: "item"
  }
};
