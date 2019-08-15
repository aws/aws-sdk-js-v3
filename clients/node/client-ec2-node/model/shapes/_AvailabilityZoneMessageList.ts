import { List as _List_ } from "@aws-sdk/types";
import { _AvailabilityZoneMessage } from "./_AvailabilityZoneMessage";

export const _AvailabilityZoneMessageList: _List_ = {
  type: "list",
  member: {
    shape: _AvailabilityZoneMessage,
    locationName: "item"
  }
};
