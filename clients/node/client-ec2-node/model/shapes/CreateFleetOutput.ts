import { _CreateFleetErrorsSet } from "./_CreateFleetErrorsSet";
import { _CreateFleetInstancesSet } from "./_CreateFleetInstancesSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFleetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetId: {
      shape: {
        type: "string"
      },
      locationName: "fleetId"
    },
    Errors: {
      shape: _CreateFleetErrorsSet,
      locationName: "errorSet"
    },
    Instances: {
      shape: _CreateFleetInstancesSet,
      locationName: "fleetInstanceSet"
    }
  }
};
