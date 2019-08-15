import { _PlacementTemplate } from "./_PlacementTemplate";
import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProjectDescription: _Structure_ = {
  type: "structure",
  required: ["projectName", "createdDate", "updatedDate"],
  members: {
    arn: {
      shape: {
        type: "string"
      }
    },
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
    createdDate: {
      shape: {
        type: "timestamp"
      }
    },
    updatedDate: {
      shape: {
        type: "timestamp"
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
