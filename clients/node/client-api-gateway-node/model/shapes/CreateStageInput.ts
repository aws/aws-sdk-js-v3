import { _MapOfStringToString } from "./_MapOfStringToString";
import { _CanarySettings } from "./_CanarySettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStageInput: _Structure_ = {
  type: "structure",
  required: ["restApiId", "stageName", "deploymentId"],
  members: {
    restApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "restapi_id"
    },
    stageName: {
      shape: {
        type: "string"
      }
    },
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    cacheClusterEnabled: {
      shape: {
        type: "boolean"
      }
    },
    cacheClusterSize: {
      shape: {
        type: "string"
      }
    },
    variables: {
      shape: _MapOfStringToString
    },
    documentationVersion: {
      shape: {
        type: "string"
      }
    },
    canarySettings: {
      shape: _CanarySettings
    },
    tracingEnabled: {
      shape: {
        type: "boolean"
      }
    },
    tags: {
      shape: _MapOfStringToString
    }
  }
};
