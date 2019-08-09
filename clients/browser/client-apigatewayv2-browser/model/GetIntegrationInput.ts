import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetIntegrationInput: _Structure_ = {
  type: "structure",
  required: ["ApiId", "IntegrationId"],
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
    }
  }
};
