import { _RevisionLocation } from "./_RevisionLocation";
import { _ErrorInformation } from "./_ErrorInformation";
import { _DeploymentOverview } from "./_DeploymentOverview";
import { _AutoRollbackConfiguration } from "./_AutoRollbackConfiguration";
import { _RollbackInfo } from "./_RollbackInfo";
import { _DeploymentStyle } from "./_DeploymentStyle";
import { _TargetInstances } from "./_TargetInstances";
import { _BlueGreenDeploymentConfiguration } from "./_BlueGreenDeploymentConfiguration";
import { _LoadBalancerInfo } from "./_LoadBalancerInfo";
import { _DeploymentStatusMessageList } from "./_DeploymentStatusMessageList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeploymentInfo: _Structure_ = {
  type: "structure",
  required: [],
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
    deploymentConfigName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    previousRevision: {
      shape: _RevisionLocation
    },
    revision: {
      shape: _RevisionLocation
    },
    status: {
      shape: {
        type: "string"
      }
    },
    errorInformation: {
      shape: _ErrorInformation
    },
    createTime: {
      shape: {
        type: "timestamp"
      }
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    completeTime: {
      shape: {
        type: "timestamp"
      }
    },
    deploymentOverview: {
      shape: _DeploymentOverview
    },
    description: {
      shape: {
        type: "string"
      }
    },
    creator: {
      shape: {
        type: "string"
      }
    },
    ignoreApplicationStopFailures: {
      shape: {
        type: "boolean"
      }
    },
    autoRollbackConfiguration: {
      shape: _AutoRollbackConfiguration
    },
    updateOutdatedInstancesOnly: {
      shape: {
        type: "boolean"
      }
    },
    rollbackInfo: {
      shape: _RollbackInfo
    },
    deploymentStyle: {
      shape: _DeploymentStyle
    },
    targetInstances: {
      shape: _TargetInstances
    },
    instanceTerminationWaitTimeStarted: {
      shape: {
        type: "boolean"
      }
    },
    blueGreenDeploymentConfiguration: {
      shape: _BlueGreenDeploymentConfiguration
    },
    loadBalancerInfo: {
      shape: _LoadBalancerInfo
    },
    additionalDeploymentStatusInfo: {
      shape: {
        type: "string"
      }
    },
    fileExistsBehavior: {
      shape: {
        type: "string"
      }
    },
    deploymentStatusMessages: {
      shape: _DeploymentStatusMessageList
    },
    computePlatform: {
      shape: {
        type: "string"
      }
    }
  }
};
