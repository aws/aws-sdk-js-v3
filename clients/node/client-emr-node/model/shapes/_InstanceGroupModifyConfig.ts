import { _EC2InstanceIdsToTerminateList } from "./_EC2InstanceIdsToTerminateList";
import { _ShrinkPolicy } from "./_ShrinkPolicy";
import { _ConfigurationList } from "./_ConfigurationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceGroupModifyConfig: _Structure_ = {
  type: "structure",
  required: ["InstanceGroupId"],
  members: {
    InstanceGroupId: {
      shape: {
        type: "string"
      }
    },
    InstanceCount: {
      shape: {
        type: "integer"
      }
    },
    EC2InstanceIdsToTerminate: {
      shape: _EC2InstanceIdsToTerminateList
    },
    ShrinkPolicy: {
      shape: _ShrinkPolicy
    },
    Configurations: {
      shape: _ConfigurationList
    }
  }
};
