import { ___listOf__string } from "./___listOf__string";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApiOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApiEndpoint: {
      shape: {
        type: "string"
      },
      locationName: "apiEndpoint"
    },
    ApiId: {
      shape: {
        type: "string"
      },
      locationName: "apiId"
    },
    ApiKeySelectionExpression: {
      shape: {
        type: "string"
      },
      locationName: "apiKeySelectionExpression"
    },
    CreatedDate: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      locationName: "createdDate"
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
    Warnings: {
      shape: ___listOf__string,
      locationName: "warnings"
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    }
  }
};
