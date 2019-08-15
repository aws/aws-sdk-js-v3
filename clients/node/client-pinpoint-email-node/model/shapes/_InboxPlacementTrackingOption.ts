import { _IspNameList } from "./_IspNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InboxPlacementTrackingOption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Global: {
      shape: {
        type: "boolean"
      }
    },
    TrackedIsps: {
      shape: _IspNameList
    }
  }
};
