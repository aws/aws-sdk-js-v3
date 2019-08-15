import { List as _List_ } from "@aws-sdk/types";
import { _TableError } from "./_TableError";

export const _TableErrors: _List_ = {
  type: "list",
  member: {
    shape: _TableError
  }
};
