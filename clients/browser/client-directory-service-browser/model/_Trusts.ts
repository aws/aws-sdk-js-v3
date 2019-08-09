import { List as _List_ } from "@aws-sdk/types";
import { _Trust } from "./_Trust";

export const _Trusts: _List_ = {
  type: "list",
  member: {
    shape: _Trust
  }
};
