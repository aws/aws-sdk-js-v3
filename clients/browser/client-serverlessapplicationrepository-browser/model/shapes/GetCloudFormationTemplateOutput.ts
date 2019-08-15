import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCloudFormationTemplateOutput: _Structure_ = {
  type: "structure",
  required: [],
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
    ExpirationTime: {
      shape: {
        type: "string"
      },
      locationName: "expirationTime"
    },
    SemanticVersion: {
      shape: {
        type: "string"
      },
      locationName: "semanticVersion"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    },
    TemplateId: {
      shape: {
        type: "string"
      },
      locationName: "templateId"
    },
    TemplateUrl: {
      shape: {
        type: "string"
      },
      locationName: "templateUrl"
    }
  }
};
