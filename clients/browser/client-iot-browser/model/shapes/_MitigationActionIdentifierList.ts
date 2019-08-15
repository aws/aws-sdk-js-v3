import { List as _List_ } from "@aws-sdk/types";
import { _MitigationActionIdentifier } from "./_MitigationActionIdentifier";

export const _MitigationActionIdentifierList: _List_ = {
  type: "list",
  member: {
    shape: _MitigationActionIdentifier
  }
};
