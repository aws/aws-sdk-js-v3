import { _FleetLaunchTemplateConfigList } from "./_FleetLaunchTemplateConfigList";
import { _TargetCapacitySpecification } from "./_TargetCapacitySpecification";
import { _SpotOptions } from "./_SpotOptions";
import { _OnDemandOptions } from "./_OnDemandOptions";
import { _TagList } from "./_TagList";
import { _DescribeFleetsErrorSet } from "./_DescribeFleetsErrorSet";
import { _DescribeFleetsInstancesSet } from "./_DescribeFleetsInstancesSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FleetData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActivityStatus: {
      shape: {
        type: "string"
      },
      locationName: "activityStatus"
    },
    CreateTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "createTime"
    },
    FleetId: {
      shape: {
        type: "string"
      },
      locationName: "fleetId"
    },
    FleetState: {
      shape: {
        type: "string"
      },
      locationName: "fleetState"
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
    FulfilledOnDemandCapacity: {
      shape: {
        type: "float"
      },
      locationName: "fulfilledOnDemandCapacity"
    },
    LaunchTemplateConfigs: {
      shape: _FleetLaunchTemplateConfigList,
      locationName: "launchTemplateConfigs"
    },
    TargetCapacitySpecification: {
      shape: _TargetCapacitySpecification,
      locationName: "targetCapacitySpecification"
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
    SpotOptions: {
      shape: _SpotOptions,
      locationName: "spotOptions"
    },
    OnDemandOptions: {
      shape: _OnDemandOptions,
      locationName: "onDemandOptions"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    },
    Errors: {
      shape: _DescribeFleetsErrorSet,
      locationName: "errorSet"
    },
    Instances: {
      shape: _DescribeFleetsInstancesSet,
      locationName: "fleetInstanceSet"
    }
  }
};
