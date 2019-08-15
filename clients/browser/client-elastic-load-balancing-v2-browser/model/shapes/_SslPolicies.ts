import { List as _List_ } from "@aws-sdk/types";
import { _SslPolicy } from "./_SslPolicy";

export const _SslPolicies: _List_ = {
  type: "list",
  member: {
    shape: _SslPolicy
  }
};
