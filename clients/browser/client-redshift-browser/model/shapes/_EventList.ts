import { List as _List_ } from "@aws-sdk/types";
import { _Event } from "./_Event";

export const _EventList: _List_ = {
  type: "list",
  member: {
    shape: _Event,
    locationName: "Event"
  }
};
