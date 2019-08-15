import { _PlacementAttributeMap } from "./_PlacementAttributeMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePlacementInput: _Structure_ = {
  type: "structure",
  required: ["placementName", "projectName"],
  members: {
    placementName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    projectName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "projectName"
    },
    attributes: {
      shape: _PlacementAttributeMap
    }
  }
};
