import { _TrackList } from "./_TrackList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterTracksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaintenanceTracks: {
      shape: _TrackList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
