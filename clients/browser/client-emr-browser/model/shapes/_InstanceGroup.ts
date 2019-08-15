import { _InstanceGroupStatus } from "./_InstanceGroupStatus";
import { _ConfigurationList } from "./_ConfigurationList";
import { _EbsBlockDeviceList } from "./_EbsBlockDeviceList";
import { _ShrinkPolicy } from "./_ShrinkPolicy";
import { _AutoScalingPolicyDescription } from "./_AutoScalingPolicyDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Market: {
      shape: {
        type: "string"
      }
    },
    InstanceGroupType: {
      shape: {
        type: "string"
      }
    },
    BidPrice: {
      shape: {
        type: "string"
      }
    },
    InstanceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RequestedInstanceCount: {
      shape: {
        type: "integer"
      }
    },
    RunningInstanceCount: {
      shape: {
        type: "integer"
      }
    },
    Status: {
      shape: _InstanceGroupStatus
    },
    Configurations: {
      shape: _ConfigurationList
    },
    ConfigurationsVersion: {
      shape: {
        type: "integer"
      }
    },
    LastSuccessfullyAppliedConfigurations: {
      shape: _ConfigurationList
    },
    LastSuccessfullyAppliedConfigurationsVersion: {
      shape: {
        type: "integer"
      }
    },
    EbsBlockDevices: {
      shape: _EbsBlockDeviceList
    },
    EbsOptimized: {
      shape: {
        type: "boolean"
      }
    },
    ShrinkPolicy: {
      shape: _ShrinkPolicy
    },
    AutoScalingPolicy: {
      shape: _AutoScalingPolicyDescription
    }
  }
};
