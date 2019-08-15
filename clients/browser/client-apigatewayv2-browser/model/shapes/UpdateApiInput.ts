import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApiInput: _Structure_ = {
  type: "structure",
  required: ["ApiId"],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    ApiKeySelectionExpression: {
      shape: {
        type: "string"
      },
      locationName: "apiKeySelectionExpression"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    DisableSchemaValidation: {
      shape: {
        type: "boolean"
      },
      locationName: "disableSchemaValidation"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    RouteSelectionExpression: {
      shape: {
        type: "string"
      },
      locationName: "routeSelectionExpression"
    },
    Version: {
      shape: {
        type: "string"
      },
      locationName: "version"
    }
  }
};
