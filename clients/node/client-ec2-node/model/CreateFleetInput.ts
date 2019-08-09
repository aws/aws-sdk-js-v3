import { _SpotOptionsRequest } from "./_SpotOptionsRequest";
import { _OnDemandOptionsRequest } from "./_OnDemandOptionsRequest";
import { _FleetLaunchTemplateConfigListRequest } from "./_FleetLaunchTemplateConfigListRequest";
import { _TargetCapacitySpecificationRequest } from "./_TargetCapacitySpecificationRequest";
import { _TagSpecificationList } from "./_TagSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateFleetInput: _Structure_ = {
  type: "structure",
  required: ["LaunchTemplateConfigs", "TargetCapacitySpecification"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    SpotOptions: {
      shape: _SpotOptionsRequest
    },
    OnDemandOptions: {
      shape: _OnDemandOptionsRequest
    },
    ExcessCapacityTerminationPolicy: {
      shape: {
        type: "string"
      }
    },
    LaunchTemplateConfigs: {
      shape: _FleetLaunchTemplateConfigListRequest
    },
    TargetCapacitySpecification: {
      shape: _TargetCapacitySpecificationRequest
    },
    TerminateInstancesWithExpiration: {
      shape: {
        type: "boolean"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    ValidFrom: {
      shape: {
        type: "timestamp"
      }
    },
    ValidUntil: {
      shape: {
        type: "timestamp"
      }
    },
    ReplaceUnhealthyInstances: {
      shape: {
        type: "boolean"
      }
    },
    TagSpecifications: {
      shape: _TagSpecificationList,
      locationName: "TagSpecification"
    }
  }
};
