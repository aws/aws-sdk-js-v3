import { _PlacementAttributeMap } from "./_PlacementAttributeMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlacementDescription: _Structure_ = {
  type: "structure",
  required: [
    "projectName",
    "placementName",
    "attributes",
    "createdDate",
    "updatedDate"
  ],
  members: {
    projectName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    placementName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    attributes: {
      shape: _PlacementAttributeMap
    },
    createdDate: {
      shape: {
        type: "timestamp"
      }
    },
    updatedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
