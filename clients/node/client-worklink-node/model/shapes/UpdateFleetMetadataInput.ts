import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFleetMetadataInput: _Structure_ = {
  type: "structure",
  required: ["FleetArn"],
  members: {
    FleetArn: {
      shape: {
        type: "string",
        min: 20
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
