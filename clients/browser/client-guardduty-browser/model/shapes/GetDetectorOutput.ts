import { _TagMap } from "./_TagMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDetectorOutput: _Structure_ = {
  type: "structure",
  required: ["ServiceRole", "Status"],
  members: {
    CreatedAt: {
      shape: {
        type: "string"
      },
      locationName: "createdAt"
    },
    FindingPublishingFrequency: {
      shape: {
        type: "string"
      },
      locationName: "findingPublishingFrequency"
    },
    ServiceRole: {
      shape: {
        type: "string"
      },
      locationName: "serviceRole"
    },
    Status: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "status"
    },
    UpdatedAt: {
      shape: {
        type: "string"
      },
      locationName: "updatedAt"
    },
    Tags: {
      shape: _TagMap,
      locationName: "tags"
    }
  }
};
