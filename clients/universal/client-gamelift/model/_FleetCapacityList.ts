import { List as _List_ } from "@aws-sdk/types";
import { _FleetCapacity } from "./_FleetCapacity";

export const _FleetCapacityList: _List_ = {
  type: "list",
  member: {
    shape: _FleetCapacity
  }
};
