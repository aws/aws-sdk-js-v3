import { List as _List_ } from "@aws-sdk/types";
import { _TableVersionError } from "./_TableVersionError";

export const _TableVersionErrors: _List_ = {
  type: "list",
  member: {
    shape: _TableVersionError
  }
};
