import { List as _List_ } from "@aws-sdk/types";
import { _ResourceError } from "./_ResourceError";

export const _ResourceErrors: _List_ = {
  type: "list",
  member: {
    shape: _ResourceError
  }
};
