import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateDeviceWithPlacementInput: _Structure_ = {
  type: "structure",
  required: ["projectName", "placementName", "deviceId", "deviceTemplateName"],
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
    },
    deviceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    deviceTemplateName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "deviceTemplateName"
    }
  }
};
