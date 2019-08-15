import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteIntegrationResponseInput: _Structure_ = {
  type: "structure",
  required: ["ApiId", "IntegrationResponseId", "IntegrationId"],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    IntegrationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "integrationId"
    },
    IntegrationResponseId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "integrationResponseId"
    }
  }
};
