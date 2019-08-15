import { _VolumeStatusActionsList } from "./_VolumeStatusActionsList";
import { _VolumeStatusEventsList } from "./_VolumeStatusEventsList";
import { _VolumeStatusInfo } from "./_VolumeStatusInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VolumeStatusItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Actions: {
      shape: _VolumeStatusActionsList,
      locationName: "actionsSet"
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    Events: {
      shape: _VolumeStatusEventsList,
      locationName: "eventsSet"
    },
    VolumeId: {
      shape: {
        type: "string"
      },
      locationName: "volumeId"
    },
    VolumeStatus: {
      shape: _VolumeStatusInfo,
      locationName: "volumeStatus"
    }
  }
};
