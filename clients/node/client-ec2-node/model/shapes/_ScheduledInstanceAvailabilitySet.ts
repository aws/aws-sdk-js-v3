import { List as _List_ } from "@aws-sdk/types";
import { _ScheduledInstanceAvailability } from "./_ScheduledInstanceAvailability";

export const _ScheduledInstanceAvailabilitySet: _List_ = {
  type: "list",
  member: {
    shape: _ScheduledInstanceAvailability,
    locationName: "item"
  }
};
