import { List as _List_ } from "@aws-sdk/types";
import { _ResultRowValue } from "./_ResultRowValue";

export const _ListOfResultRowValue: _List_ = {
  type: "list",
  member: {
    shape: _ResultRowValue
  }
};
