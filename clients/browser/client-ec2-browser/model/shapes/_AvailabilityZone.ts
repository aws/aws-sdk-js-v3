import { _AvailabilityZoneMessageList } from "./_AvailabilityZoneMessageList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AvailabilityZone: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    State: {
      shape: {
        type: "string"
      },
      locationName: "zoneState"
    },
    Messages: {
      shape: _AvailabilityZoneMessageList,
      locationName: "messageSet"
    },
    RegionName: {
      shape: {
        type: "string"
      },
      locationName: "regionName"
    },
    ZoneName: {
      shape: {
        type: "string"
      },
      locationName: "zoneName"
    },
    ZoneId: {
      shape: {
        type: "string"
      },
      locationName: "zoneId"
    }
  }
};
