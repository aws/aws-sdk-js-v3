import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCloudFormationTemplateInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "TemplateId"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "applicationId"
    },
    TemplateId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "templateId"
    }
  }
};
