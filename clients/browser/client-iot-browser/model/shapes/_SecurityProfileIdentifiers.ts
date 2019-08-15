import { List as _List_ } from "@aws-sdk/types";
import { _SecurityProfileIdentifier } from "./_SecurityProfileIdentifier";

export const _SecurityProfileIdentifiers: _List_ = {
  type: "list",
  member: {
    shape: _SecurityProfileIdentifier
  }
};
