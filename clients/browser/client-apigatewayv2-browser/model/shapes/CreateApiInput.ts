import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateApiInput: _Structure_ = {
  type: "structure",
  required: ["RouteSelectionExpression", "ProtocolType", "Name"],
  members: {
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
    ProtocolType: {
      shape: {
        type: "string"
      },
      locationName: "protocolType"
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
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    }
  }
};
