import { List as _List_ } from "@aws-sdk/types";
import { _AuthResult } from "./_AuthResult";

export const _AuthResults: _List_ = {
  type: "list",
  member: {
    shape: _AuthResult
  }
};
