import { List as _List_ } from "@aws-sdk/types";
import { _VolumeStatusEvent } from "./_VolumeStatusEvent";

export const _VolumeStatusEventsList: _List_ = {
  type: "list",
  member: {
    shape: _VolumeStatusEvent,
    locationName: "item"
  }
};
