import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDevicesInPlacementInput: _Structure_ = {
  type: "structure",
  required: ["projectName", "placementName"],
  members: {
    projectName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "projectName"
    },
    placementName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "placementName"
    }
  }
};
