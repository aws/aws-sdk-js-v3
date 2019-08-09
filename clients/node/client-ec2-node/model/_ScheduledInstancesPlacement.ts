import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduledInstancesPlacement: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    GroupName: {
      shape: {
        type: "string"
      }
    }
  }
};
