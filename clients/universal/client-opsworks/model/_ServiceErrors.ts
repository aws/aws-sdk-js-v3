import { List as _List_ } from "@aws-sdk/types";
import { _ServiceError } from "./_ServiceError";

export const _ServiceErrors: _List_ = {
  type: "list",
  member: {
    shape: _ServiceError
  }
};
