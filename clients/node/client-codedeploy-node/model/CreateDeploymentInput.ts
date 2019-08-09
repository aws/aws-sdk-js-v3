import { _RevisionLocation } from "./_RevisionLocation";
import { _TargetInstances } from "./_TargetInstances";
import { _AutoRollbackConfiguration } from "./_AutoRollbackConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeploymentInput: _Structure_ = {
  type: "structure",
  required: ["applicationName"],
  members: {
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    deploymentGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    revision: {
      shape: _RevisionLocation
    },
    deploymentConfigName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    ignoreApplicationStopFailures: {
      shape: {
        type: "boolean"
      }
    },
    targetInstances: {
      shape: _TargetInstances
    },
    autoRollbackConfiguration: {
      shape: _AutoRollbackConfiguration
    },
    updateOutdatedInstancesOnly: {
      shape: {
        type: "boolean"
      }
    },
    fileExistsBehavior: {
      shape: {
        type: "string"
      }
    }
  }
};
