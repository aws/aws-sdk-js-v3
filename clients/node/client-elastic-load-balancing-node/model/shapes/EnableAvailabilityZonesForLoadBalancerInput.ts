import { _AvailabilityZones } from "./_AvailabilityZones";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const EnableAvailabilityZonesForLoadBalancerInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName", "AvailabilityZones"],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZones: {
      shape: _AvailabilityZones
    }
  }
};
