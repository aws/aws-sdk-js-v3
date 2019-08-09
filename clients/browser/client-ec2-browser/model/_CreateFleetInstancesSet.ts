import { List as _List_ } from "@aws-sdk/types";
import { _CreateFleetInstance } from "./_CreateFleetInstance";

export const _CreateFleetInstancesSet: _List_ = {
  type: "list",
  member: {
    shape: _CreateFleetInstance,
    locationName: "item"
  }
};
