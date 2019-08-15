import { _InstanceTypeConfigList } from "./_InstanceTypeConfigList";
import { _InstanceFleetProvisioningSpecifications } from "./_InstanceFleetProvisioningSpecifications";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceFleetConfig: _Structure_ = {
  type: "structure",
  required: ["InstanceFleetType"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    InstanceFleetType: {
      shape: {
        type: "string"
      }
    },
    TargetOnDemandCapacity: {
      shape: {
        type: "integer"
      }
    },
    TargetSpotCapacity: {
      shape: {
        type: "integer"
      }
    },
    InstanceTypeConfigs: {
      shape: _InstanceTypeConfigList
    },
    LaunchSpecifications: {
      shape: _InstanceFleetProvisioningSpecifications
    }
  }
};
