import { List as _List_ } from "@aws-sdk/types";
import { _PropagatingVgw } from "./_PropagatingVgw";

export const _PropagatingVgwList: _List_ = {
  type: "list",
  member: {
    shape: _PropagatingVgw,
    locationName: "item"
  }
};
