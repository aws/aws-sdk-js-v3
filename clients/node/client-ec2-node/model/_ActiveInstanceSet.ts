import { List as _List_ } from "@aws-sdk/types";
import { _ActiveInstance } from "./_ActiveInstance";

export const _ActiveInstanceSet: _List_ = {
  type: "list",
  member: {
    shape: _ActiveInstance,
    locationName: "item"
  }
};
