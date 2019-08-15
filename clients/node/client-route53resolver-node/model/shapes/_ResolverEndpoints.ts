import { List as _List_ } from "@aws-sdk/types";
import { _ResolverEndpoint } from "./_ResolverEndpoint";

export const _ResolverEndpoints: _List_ = {
  type: "list",
  member: {
    shape: _ResolverEndpoint
  }
};
