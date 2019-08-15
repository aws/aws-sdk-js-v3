import { _EC2TagFilterList } from "./_EC2TagFilterList";
import { _TagFilterList } from "./_TagFilterList";
import { _AutoScalingGroupNameList } from "./_AutoScalingGroupNameList";
import { _TriggerConfigList } from "./_TriggerConfigList";
import { _AlarmConfiguration } from "./_AlarmConfiguration";
import { _AutoRollbackConfiguration } from "./_AutoRollbackConfiguration";
import { _DeploymentStyle } from "./_DeploymentStyle";
import { _BlueGreenDeploymentConfiguration } from "./_BlueGreenDeploymentConfiguration";
import { _LoadBalancerInfo } from "./_LoadBalancerInfo";
import { _EC2TagSet } from "./_EC2TagSet";
import { _ECSServiceList } from "./_ECSServiceList";
import { _OnPremisesTagSet } from "./_OnPremisesTagSet";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeploymentGroupInput: _Structure_ = {
  type: "structure",
  required: ["applicationName", "deploymentGroupName", "serviceRoleArn"],
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
    ec2TagFilters: {
      shape: _EC2TagFilterList
    },
    onPremisesInstanceTagFilters: {
      shape: _TagFilterList
    },
    autoScalingGroups: {
      shape: _AutoScalingGroupNameList
    },
    serviceRoleArn: {
      shape: {
        type: "string"
      }
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
    ec2TagSet: {
      shape: _EC2TagSet
    },
    ecsServices: {
      shape: _ECSServiceList
    },
    onPremisesTagSet: {
      shape: _OnPremisesTagSet
    },
    tags: {
      shape: _TagList
    }
  }
};
