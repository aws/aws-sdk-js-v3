import { _IntegrationParameters } from "./_IntegrationParameters";
import { _TemplateMap } from "./_TemplateMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateIntegrationInput: _Structure_ = {
  type: "structure",
  required: ["ApiId", "IntegrationType"],
  members: {
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    ConnectionId: {
      shape: {
        type: "string"
      },
      locationName: "connectionId"
    },
    ConnectionType: {
      shape: {
        type: "string"
      },
      locationName: "connectionType"
    },
    ContentHandlingStrategy: {
      shape: {
        type: "string"
      },
      locationName: "contentHandlingStrategy"
    },
    CredentialsArn: {
      shape: {
        type: "string"
      },
      locationName: "credentialsArn"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    IntegrationMethod: {
      shape: {
        type: "string"
      },
      locationName: "integrationMethod"
    },
    IntegrationType: {
      shape: {
        type: "string"
      },
      locationName: "integrationType"
    },
    IntegrationUri: {
      shape: {
        type: "string"
      },
      locationName: "integrationUri"
    },
    PassthroughBehavior: {
      shape: {
        type: "string"
      },
      locationName: "passthroughBehavior"
    },
    RequestParameters: {
      shape: _IntegrationParameters,
      locationName: "requestParameters"
    },
    RequestTemplates: {
      shape: _TemplateMap,
      locationName: "requestTemplates"
    },
    TemplateSelectionExpression: {
      shape: {
        type: "string"
      },
      locationName: "templateSelectionExpression"
    },
    TimeoutInMillis: {
      shape: {
        type: "integer",
        min: -2147483648
      },
      locationName: "timeoutInMillis"
    }
  }
};
