import { _WebhookFilters } from "./_WebhookFilters";
import { _WebhookAuthConfiguration } from "./_WebhookAuthConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WebhookDefinition: _Structure_ = {
  type: "structure",
  required: [
    "name",
    "targetPipeline",
    "targetAction",
    "filters",
    "authentication",
    "authenticationConfiguration"
  ],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    targetPipeline: {
      shape: {
        type: "string",
        min: 1
      }
    },
    targetAction: {
      shape: {
        type: "string",
        min: 1
      }
    },
    filters: {
      shape: _WebhookFilters
    },
    authentication: {
      shape: {
        type: "string"
      }
    },
    authenticationConfiguration: {
      shape: _WebhookAuthConfiguration
    }
  }
};
