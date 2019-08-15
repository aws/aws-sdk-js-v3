import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelSpotFleetRequestsInput: _Structure_ = {
  type: "structure",
  required: ["SpotFleetRequestIds", "TerminateInstances"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    SpotFleetRequestIds: {
      shape: _ValueStringList,
      locationName: "spotFleetRequestId"
    },
    TerminateInstances: {
      shape: {
        type: "boolean"
      },
      locationName: "terminateInstances"
    }
  }
};
