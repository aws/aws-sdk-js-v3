import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeleteFleetSuccessItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CurrentFleetState: {
      shape: {
        type: "string"
      },
      locationName: "currentFleetState"
    },
    PreviousFleetState: {
      shape: {
        type: "string"
      },
      locationName: "previousFleetState"
    },
    FleetId: {
      shape: {
        type: "string"
      },
      locationName: "fleetId"
    }
  }
};
