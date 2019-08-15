import { _IntegrationParameters } from "./_IntegrationParameters";
import { _TemplateMap } from "./_TemplateMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateIntegrationResponseInput: _Structure_ = {
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
    ContentHandlingStrategy: {
      shape: {
        type: "string"
      },
      locationName: "contentHandlingStrategy"
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
    },
    IntegrationResponseKey: {
      shape: {
        type: "string"
      },
      locationName: "integrationResponseKey"
    },
    ResponseParameters: {
      shape: _IntegrationParameters,
      locationName: "responseParameters"
    },
    ResponseTemplates: {
      shape: _TemplateMap,
      locationName: "responseTemplates"
    },
    TemplateSelectionExpression: {
      shape: {
        type: "string"
      },
      locationName: "templateSelectionExpression"
    }
  }
};
