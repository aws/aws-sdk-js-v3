import { _Placement } from "./_Placement";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FleetLaunchTemplateOverridesRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    MaxPrice: {
      shape: {
        type: "string"
      }
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      }
    },
    WeightedCapacity: {
      shape: {
        type: "float"
      }
    },
    Priority: {
      shape: {
        type: "float"
      }
    },
    Placement: {
      shape: _Placement
    }
  }
};
