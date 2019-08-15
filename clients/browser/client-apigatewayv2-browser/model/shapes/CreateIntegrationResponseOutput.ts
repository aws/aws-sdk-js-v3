import { _IntegrationParameters } from "./_IntegrationParameters";
import { _TemplateMap } from "./_TemplateMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateIntegrationResponseOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ContentHandlingStrategy: {
      shape: {
        type: "string"
      },
      locationName: "contentHandlingStrategy"
    },
    IntegrationResponseId: {
      shape: {
        type: "string"
      },
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
