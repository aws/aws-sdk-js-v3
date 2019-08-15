import { _DeploymentConfiguration } from "./_DeploymentConfiguration";
import { _NetworkConfiguration } from "./_NetworkConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateServiceInput: _Structure_ = {
  type: "structure",
  required: ["service"],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    service: {
      shape: {
        type: "string"
      }
    },
    desiredCount: {
      shape: {
        type: "integer"
      }
    },
    taskDefinition: {
      shape: {
        type: "string"
      }
    },
    deploymentConfiguration: {
      shape: _DeploymentConfiguration
    },
    networkConfiguration: {
      shape: _NetworkConfiguration
    },
    platformVersion: {
      shape: {
        type: "string"
      }
    },
    forceNewDeployment: {
      shape: {
        type: "boolean"
      }
    },
    healthCheckGracePeriodSeconds: {
      shape: {
        type: "integer"
      }
    }
  }
};
