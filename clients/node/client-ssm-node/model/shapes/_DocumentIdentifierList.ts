import { List as _List_ } from "@aws-sdk/types";
import { _DocumentIdentifier } from "./_DocumentIdentifier";

export const _DocumentIdentifierList: _List_ = {
  type: "list",
  member: {
    shape: _DocumentIdentifier
  }
};
