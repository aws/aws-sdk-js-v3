import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateApplicationVersionInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "SemanticVersion"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "applicationId"
    },
    SemanticVersion: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "semanticVersion"
    },
    SourceCodeArchiveUrl: {
      shape: {
        type: "string"
      },
      locationName: "sourceCodeArchiveUrl"
    },
    SourceCodeUrl: {
      shape: {
        type: "string"
      },
      locationName: "sourceCodeUrl"
    },
    TemplateBody: {
      shape: {
        type: "string"
      },
      locationName: "templateBody"
    },
    TemplateUrl: {
      shape: {
        type: "string"
      },
      locationName: "templateUrl"
    }
  }
};
