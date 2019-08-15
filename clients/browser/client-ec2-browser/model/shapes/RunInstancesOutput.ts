import { _GroupIdentifierList } from "./_GroupIdentifierList";
import { _InstanceList } from "./_InstanceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RunInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Groups: {
      shape: _GroupIdentifierList,
      locationName: "groupSet"
    },
    Instances: {
      shape: _InstanceList,
      locationName: "instancesSet"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    },
    RequesterId: {
      shape: {
        type: "string"
      },
      locationName: "requesterId"
    },
    ReservationId: {
      shape: {
        type: "string"
      },
      locationName: "reservationId"
    }
  }
};
