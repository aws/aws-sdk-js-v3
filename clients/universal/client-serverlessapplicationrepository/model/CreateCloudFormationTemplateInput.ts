import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCloudFormationTemplateInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId"],
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
      locationName: "semanticVersion"
    }
  }
};
