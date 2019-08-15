import { _EC2TagFilterList } from "./_EC2TagFilterList";
import { _TagFilterList } from "./_TagFilterList";
import { _AutoScalingGroupList } from "./_AutoScalingGroupList";
import { _RevisionLocation } from "./_RevisionLocation";
import { _TriggerConfigList } from "./_TriggerConfigList";
import { _AlarmConfiguration } from "./_AlarmConfiguration";
import { _AutoRollbackConfiguration } from "./_AutoRollbackConfiguration";
import { _DeploymentStyle } from "./_DeploymentStyle";
import { _BlueGreenDeploymentConfiguration } from "./_BlueGreenDeploymentConfiguration";
import { _LoadBalancerInfo } from "./_LoadBalancerInfo";
import { _LastDeploymentInfo } from "./_LastDeploymentInfo";
import { _EC2TagSet } from "./_EC2TagSet";
import { _OnPremisesTagSet } from "./_OnPremisesTagSet";
import { _ECSServiceList } from "./_ECSServiceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeploymentGroupInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    deploymentGroupId: {
      shape: {
        type: "string"
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
    ec2TagFilters: {
      shape: _EC2TagFilterList
    },
    onPremisesInstanceTagFilters: {
      shape: _TagFilterList
    },
    autoScalingGroups: {
      shape: _AutoScalingGroupList
    },
    serviceRoleArn: {
      shape: {
        type: "string"
      }
    },
    targetRevision: {
      shape: _RevisionLocation
    },
    triggerConfigurations: {
      shape: _TriggerConfigList
    },
    alarmConfiguration: {
      shape: _AlarmConfiguration
    },
    autoRollbackConfiguration: {
      shape: _AutoRollbackConfiguration
    },
    deploymentStyle: {
      shape: _DeploymentStyle
    },
    blueGreenDeploymentConfiguration: {
      shape: _BlueGreenDeploymentConfiguration
    },
    loadBalancerInfo: {
      shape: _LoadBalancerInfo
    },
    lastSuccessfulDeployment: {
      shape: _LastDeploymentInfo
    },
    lastAttemptedDeployment: {
      shape: _LastDeploymentInfo
    },
    ec2TagSet: {
      shape: _EC2TagSet
    },
    onPremisesTagSet: {
      shape: _OnPremisesTagSet
    },
    computePlatform: {
      shape: {
        type: "string"
      }
    },
    ecsServices: {
      shape: _ECSServiceList
    }
  }
};
