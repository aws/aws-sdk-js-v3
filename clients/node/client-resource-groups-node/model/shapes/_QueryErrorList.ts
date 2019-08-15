import { List as _List_ } from "@aws-sdk/types";
import { _QueryError } from "./_QueryError";

export const _QueryErrorList: _List_ = {
  type: "list",
  member: {
    shape: _QueryError
  }
};
