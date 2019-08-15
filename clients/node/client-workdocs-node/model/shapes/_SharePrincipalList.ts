import { List as _List_ } from "@aws-sdk/types";
import { _SharePrincipal } from "./_SharePrincipal";

export const _SharePrincipalList: _List_ = {
  type: "list",
  member: {
    shape: _SharePrincipal
  }
};
