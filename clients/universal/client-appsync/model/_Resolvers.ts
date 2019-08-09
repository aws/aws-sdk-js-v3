import { List as _List_ } from "@aws-sdk/types";
import { _Resolver } from "./_Resolver";

export const _Resolvers: _List_ = {
  type: "list",
  member: {
    shape: _Resolver
  }
};
