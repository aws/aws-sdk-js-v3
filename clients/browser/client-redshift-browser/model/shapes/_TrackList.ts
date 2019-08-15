import { List as _List_ } from "@aws-sdk/types";
import { _MaintenanceTrack } from "./_MaintenanceTrack";

export const _TrackList: _List_ = {
  type: "list",
  member: {
    shape: _MaintenanceTrack,
    locationName: "MaintenanceTrack"
  }
};
