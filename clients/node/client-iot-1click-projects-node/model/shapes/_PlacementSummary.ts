import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlacementSummary: _Structure_ = {
  type: "structure",
  required: ["projectName", "placementName", "createdDate", "updatedDate"],
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
