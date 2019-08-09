import { List as _List_ } from "@aws-sdk/types";
import { _FleetUtilization } from "./_FleetUtilization";

export const _FleetUtilizationList: _List_ = {
  type: "list",
  member: {
    shape: _FleetUtilization
  }
};
