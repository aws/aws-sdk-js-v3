import { List as _List_ } from "@aws-sdk/types";
import { _AvailabilityZone } from "./_AvailabilityZone";

export const _AvailabilityZones: _List_ = {
  type: "list",
  member: {
    shape: _AvailabilityZone
  }
};
