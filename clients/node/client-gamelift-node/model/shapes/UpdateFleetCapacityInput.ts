import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFleetCapacityInput: _Structure_ = {
  type: "structure",
  required: ["FleetId"],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    DesiredInstances: {
      shape: {
        type: "integer"
      }
    },
    MinSize: {
      shape: {
        type: "integer"
      }
    },
    MaxSize: {
      shape: {
        type: "integer"
      }
    }
  }
};
