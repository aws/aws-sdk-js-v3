import { _EventTrackers } from "./_EventTrackers";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEventTrackersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    eventTrackers: {
      shape: _EventTrackers
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
