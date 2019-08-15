import { List as _List_ } from "@aws-sdk/types";
import { _ValidationError } from "./_ValidationError";

export const _ValidationErrors: _List_ = {
  type: "list",
  member: {
    shape: _ValidationError
  }
};
