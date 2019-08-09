import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VersionSummary: _Structure_ = {
  type: "structure",
  required: ["CreationTime", "ApplicationId", "SemanticVersion"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      locationName: "applicationId"
    },
    CreationTime: {
      shape: {
        type: "string"
      },
      locationName: "creationTime"
    },
    SemanticVersion: {
      shape: {
        type: "string"
      },
      locationName: "semanticVersion"
    },
    SourceCodeUrl: {
      shape: {
        type: "string"
      },
      locationName: "sourceCodeUrl"
    }
  }
};
