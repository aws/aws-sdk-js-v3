import { List as _List_ } from "@aws-sdk/types";
import { _RootCauseException } from "./_RootCauseException";

export const _RootCauseExceptions: _List_ = {
  type: "list",
  member: {
    shape: _RootCauseException
  }
};
