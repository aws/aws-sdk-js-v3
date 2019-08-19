import { List as _List_ } from "@aws-sdk/types";
import { _ReservationCoverageGroup } from "./_ReservationCoverageGroup";

export const _ReservationCoverageGroups: _List_ = {
  type: "list",
  member: {
    shape: _ReservationCoverageGroup
  }
};
