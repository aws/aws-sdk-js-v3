import { _InstanceStatusEventList } from "./_InstanceStatusEventList";
import { _InstanceState } from "./_InstanceState";
import { _InstanceStatusSummary } from "./_InstanceStatusSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    Events: {
      shape: _InstanceStatusEventList,
      locationName: "eventsSet"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    InstanceState: {
      shape: _InstanceState,
      locationName: "instanceState"
    },
    InstanceStatus: {
      shape: _InstanceStatusSummary,
      locationName: "instanceStatus"
    },
    SystemStatus: {
      shape: _InstanceStatusSummary,
      locationName: "systemStatus"
    }
  }
};
