import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeletePlacementInput: _Structure_ = {
  type: "structure",
  required: ["placementName", "projectName"],
  members: {
    placementName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "placementName"
    },
    projectName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "projectName"
    }
  }
};
