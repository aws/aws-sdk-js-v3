import { List as _List_ } from "@aws-sdk/types";
import { _FieldToMatch } from "./_FieldToMatch";

export const _RedactedFields: _List_ = {
  type: "list",
  member: {
    shape: _FieldToMatch
  }
};
