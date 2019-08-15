import { List as _List_ } from "@aws-sdk/types";
import { _InstanceFleet } from "./_InstanceFleet";

export const _InstanceFleetList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceFleet
  }
};
