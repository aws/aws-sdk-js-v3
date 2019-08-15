import { _ConfigurationList } from "./_ConfigurationList";
import { _EbsConfiguration } from "./_EbsConfiguration";
import { _AutoScalingPolicy } from "./_AutoScalingPolicy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceGroupConfig: _Structure_ = {
  type: "structure",
  required: ["InstanceRole", "InstanceType", "InstanceCount"],
  members: {
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
    InstanceRole: {
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
    InstanceCount: {
      shape: {
        type: "integer"
      }
    },
    Configurations: {
      shape: _ConfigurationList
    },
    EbsConfiguration: {
      shape: _EbsConfiguration
    },
    AutoScalingPolicy: {
      shape: _AutoScalingPolicy
    }
  }
};
