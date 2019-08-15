import { List as _List_ } from "@aws-sdk/types";
import { _RouteFilterPrefix } from "./_RouteFilterPrefix";

export const _RouteFilterPrefixList: _List_ = {
  type: "list",
  member: {
    shape: _RouteFilterPrefix
  }
};
