import { _AvailableCapacity } from "./_AvailableCapacity";
import { _HostProperties } from "./_HostProperties";
import { _HostInstanceList } from "./_HostInstanceList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Host: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutoPlacement: {
      shape: {
        type: "string"
      },
      locationName: "autoPlacement"
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    AvailableCapacity: {
      shape: _AvailableCapacity,
      locationName: "availableCapacity"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    HostId: {
      shape: {
        type: "string"
      },
      locationName: "hostId"
    },
    HostProperties: {
      shape: _HostProperties,
      locationName: "hostProperties"
    },
    HostReservationId: {
      shape: {
        type: "string"
      },
      locationName: "hostReservationId"
    },
    Instances: {
      shape: _HostInstanceList,
      locationName: "instances"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    AllocationTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "allocationTime"
    },
    ReleaseTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "releaseTime"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    },
    HostRecovery: {
      shape: {
        type: "string"
      },
      locationName: "hostRecovery"
    }
  }
};
