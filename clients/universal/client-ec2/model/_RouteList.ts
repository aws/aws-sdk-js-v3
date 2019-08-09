import { List as _List_ } from "@aws-sdk/types";
import { _Route } from "./_Route";

export const _RouteList: _List_ = {
  type: "list",
  member: {
    shape: _Route,
    locationName: "item"
  }
};
