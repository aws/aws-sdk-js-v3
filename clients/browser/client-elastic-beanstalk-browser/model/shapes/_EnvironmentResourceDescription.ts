import { _AutoScalingGroupList } from "./_AutoScalingGroupList";
import { _InstanceList } from "./_InstanceList";
import { _LaunchConfigurationList } from "./_LaunchConfigurationList";
import { _LaunchTemplateList } from "./_LaunchTemplateList";
import { _LoadBalancerList } from "./_LoadBalancerList";
import { _TriggerList } from "./_TriggerList";
import { _QueueList } from "./_QueueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnvironmentResourceDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EnvironmentName: {
      shape: {
        type: "string",
        min: 4
      }
    },
    AutoScalingGroups: {
      shape: _AutoScalingGroupList
    },
    Instances: {
      shape: _InstanceList
    },
    LaunchConfigurations: {
      shape: _LaunchConfigurationList
    },
    LaunchTemplates: {
      shape: _LaunchTemplateList
    },
    LoadBalancers: {
      shape: _LoadBalancerList
    },
    Triggers: {
      shape: _TriggerList
    },
    Queues: {
      shape: _QueueList
    }
  }
};
