import { List as _List_ } from "@aws-sdk/types";
import { _AvailabilityZoneDetail } from "./_AvailabilityZoneDetail";

export const _TraceAvailabilityZones: _List_ = {
  type: "list",
  member: {
    shape: _AvailabilityZoneDetail
  }
};
