import { List as _List_ } from "@aws-sdk/types";
import { _SecurityGroupIdentifier } from "./_SecurityGroupIdentifier";

export const _GroupIdentifierSet: _List_ = {
  type: "list",
  member: {
    shape: _SecurityGroupIdentifier,
    locationName: "item"
  }
};
