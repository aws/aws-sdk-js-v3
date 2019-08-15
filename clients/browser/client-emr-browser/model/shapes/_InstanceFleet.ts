import { _InstanceFleetStatus } from "./_InstanceFleetStatus";
import { _InstanceTypeSpecificationList } from "./_InstanceTypeSpecificationList";
import { _InstanceFleetProvisioningSpecifications } from "./_InstanceFleetProvisioningSpecifications";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceFleet: _Structure_ = {
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
    Status: {
      shape: _InstanceFleetStatus
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
    ProvisionedOnDemandCapacity: {
      shape: {
        type: "integer"
      }
    },
    ProvisionedSpotCapacity: {
      shape: {
        type: "integer"
      }
    },
    InstanceTypeSpecifications: {
      shape: _InstanceTypeSpecificationList
    },
    LaunchSpecifications: {
      shape: _InstanceFleetProvisioningSpecifications
    }
  }
};
