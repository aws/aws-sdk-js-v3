import { List as _List_ } from "@aws-sdk/types";
import { _BatchItemError } from "./_BatchItemError";

export const _BatchItemErrorList: _List_ = {
  type: "list",
  member: {
    shape: _BatchItemError
  }
};
