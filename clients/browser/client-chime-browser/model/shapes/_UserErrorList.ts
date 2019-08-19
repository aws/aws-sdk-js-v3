import { List as _List_ } from "@aws-sdk/types";
import { _UserError } from "./_UserError";

export const _UserErrorList: _List_ = {
  type: "list",
  member: {
    shape: _UserError
  }
};
