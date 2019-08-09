import { _IntegrationParameters } from "./_IntegrationParameters";
import { _TemplateMap } from "./_TemplateMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateIntegrationResponseInput: _Structure_ = {
  type: "structure",
  required: ["ApiId", "IntegrationId", "IntegrationResponseKey"],
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
