import { _EligibleTracksToUpdateList } from "./_EligibleTracksToUpdateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MaintenanceTrack: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaintenanceTrackName: {
      shape: {
        type: "string"
      }
    },
    DatabaseVersion: {
      shape: {
        type: "string"
      }
    },
    UpdateTargets: {
      shape: _EligibleTracksToUpdateList
    }
  }
};
