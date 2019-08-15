import { _DeleteFleetError } from "./_DeleteFleetError";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeleteFleetErrorItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Error: {
      shape: _DeleteFleetError,
      locationName: "error"
    },
    FleetId: {
      shape: {
        type: "string"
      },
      locationName: "fleetId"
    }
  }
};
