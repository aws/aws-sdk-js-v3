import { _FleetIdSet } from "./_FleetIdSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteFleetsInput: _Structure_ = {
  type: "structure",
  required: ["FleetIds", "TerminateInstances"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    FleetIds: {
      shape: _FleetIdSet,
      locationName: "FleetId"
    },
    TerminateInstances: {
      shape: {
        type: "boolean"
      }
    }
  }
};
