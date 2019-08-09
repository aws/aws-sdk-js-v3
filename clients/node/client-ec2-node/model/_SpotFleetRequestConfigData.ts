import { _LaunchSpecsList } from "./_LaunchSpecsList";
import { _LaunchTemplateConfigList } from "./_LaunchTemplateConfigList";
import { _LoadBalancersConfig } from "./_LoadBalancersConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SpotFleetRequestConfigData: _Structure_ = {
  type: "structure",
  required: ["IamFleetRole", "TargetCapacity"],
  members: {
    AllocationStrategy: {
      shape: {
        type: "string"
      },
      locationName: "allocationStrategy"
    },
    OnDemandAllocationStrategy: {
      shape: {
        type: "string"
      },
      locationName: "onDemandAllocationStrategy"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    ExcessCapacityTerminationPolicy: {
      shape: {
        type: "string"
      },
      locationName: "excessCapacityTerminationPolicy"
    },
    FulfilledCapacity: {
      shape: {
        type: "float"
      },
      locationName: "fulfilledCapacity"
    },
    OnDemandFulfilledCapacity: {
      shape: {
        type: "float"
      },
      locationName: "onDemandFulfilledCapacity"
    },
    IamFleetRole: {
      shape: {
        type: "string"
      },
      locationName: "iamFleetRole"
    },
    LaunchSpecifications: {
      shape: _LaunchSpecsList,
      locationName: "launchSpecifications"
    },
    LaunchTemplateConfigs: {
      shape: _LaunchTemplateConfigList,
      locationName: "launchTemplateConfigs"
    },
    SpotPrice: {
      shape: {
        type: "string"
      },
      locationName: "spotPrice"
    },
    TargetCapacity: {
      shape: {
        type: "integer"
      },
      locationName: "targetCapacity"
    },
    OnDemandTargetCapacity: {
      shape: {
        type: "integer"
      },
      locationName: "onDemandTargetCapacity"
    },
    OnDemandMaxTotalPrice: {
      shape: {
        type: "string"
      },
      locationName: "onDemandMaxTotalPrice"
    },
    SpotMaxTotalPrice: {
      shape: {
        type: "string"
      },
      locationName: "spotMaxTotalPrice"
    },
    TerminateInstancesWithExpiration: {
      shape: {
        type: "boolean"
      },
      locationName: "terminateInstancesWithExpiration"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    },
    ValidFrom: {
      shape: {
        type: "timestamp"
      },
      locationName: "validFrom"
    },
    ValidUntil: {
      shape: {
        type: "timestamp"
      },
      locationName: "validUntil"
    },
    ReplaceUnhealthyInstances: {
      shape: {
        type: "boolean"
      },
      locationName: "replaceUnhealthyInstances"
    },
    InstanceInterruptionBehavior: {
      shape: {
        type: "string"
      },
      locationName: "instanceInterruptionBehavior"
    },
    LoadBalancersConfig: {
      shape: _LoadBalancersConfig,
      locationName: "loadBalancersConfig"
    },
    InstancePoolsToUseCount: {
      shape: {
        type: "integer"
      },
      locationName: "instancePoolsToUseCount"
    }
  }
};
