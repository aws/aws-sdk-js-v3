import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFleetInput: _Structure_ = {
  type: "structure",
  required: ["FleetName"],
  members: {
    FleetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DisplayName: {
      shape: {
        type: "string"
      }
    },
    OptimizeForEndUserLocation: {
      shape: {
        type: "boolean"
      }
    }
  }
};
