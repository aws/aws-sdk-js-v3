import { List as _List_ } from "@aws-sdk/types";

export const _PreferredAvailabilityZoneList: _List_ = {
  type: "list",
  member: {
    shape: {
      type: "string"
    },
    locationName: "PreferredAvailabilityZone"
  }
};
