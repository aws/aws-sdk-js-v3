import { List as _List_ } from "@aws-sdk/types";
import { _InstanceCapacity } from "./_InstanceCapacity";

export const _AvailableInstanceCapacityList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceCapacity,
    locationName: "item"
  }
};
