import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationDependencySummary: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "SemanticVersion"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      locationName: "applicationId"
    },
    SemanticVersion: {
      shape: {
        type: "string"
      },
      locationName: "semanticVersion"
    }
  }
};
