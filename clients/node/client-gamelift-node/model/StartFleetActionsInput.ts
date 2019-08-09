import { _FleetActionList } from "./_FleetActionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartFleetActionsInput: _Structure_ = {
  type: "structure",
  required: ["FleetId", "Actions"],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    Actions: {
      shape: _FleetActionList
    }
  }
};
