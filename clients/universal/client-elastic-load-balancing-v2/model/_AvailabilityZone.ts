import { _LoadBalancerAddresses } from "./_LoadBalancerAddresses";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AvailabilityZone: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ZoneName: {
      shape: {
        type: "string"
      }
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    LoadBalancerAddresses: {
      shape: _LoadBalancerAddresses
    }
  }
};
