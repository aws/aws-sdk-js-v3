import { _MapOfStringToString } from "./_MapOfStringToString";
import { _DeploymentCanarySettings } from "./_DeploymentCanarySettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeploymentInput: _Structure_ = {
  type: "structure",
  required: ["restApiId"],
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
    stageDescription: {
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
    canarySettings: {
      shape: _DeploymentCanarySettings
    },
    tracingEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
