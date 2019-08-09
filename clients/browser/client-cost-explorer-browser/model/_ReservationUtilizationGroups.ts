import { List as _List_ } from "@aws-sdk/types";
import { _ReservationUtilizationGroup } from "./_ReservationUtilizationGroup";

export const _ReservationUtilizationGroups: _List_ = {
  type: "list",
  member: {
    shape: _ReservationUtilizationGroup
  }
};
