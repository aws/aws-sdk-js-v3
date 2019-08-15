import { _PlacementTemplate } from "./_PlacementTemplate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateProjectInput: _Structure_ = {
  type: "structure",
  required: ["projectName"],
  members: {
    projectName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "projectName"
    },
    description: {
      shape: {
        type: "string"
      }
    },
    placementTemplate: {
      shape: _PlacementTemplate
    }
  }
};
