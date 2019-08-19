import { List as _List_ } from "@aws-sdk/types";
import { _RouteTable } from "./_RouteTable";

export const _RouteTableList: _List_ = {
  type: "list",
  member: {
    shape: _RouteTable,
    locationName: "item"
  }
};
