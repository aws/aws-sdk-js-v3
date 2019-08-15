import { _PlacementTemplate } from "./_PlacementTemplate";
import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateProjectInput: _Structure_ = {
  type: "structure",
  required: ["projectName"],
  members: {
    projectName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    placementTemplate: {
      shape: _PlacementTemplate
    },
    tags: {
      shape: _TagMap
    }
  }
};
