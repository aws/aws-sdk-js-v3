import { _AvailabilityZones } from "./_AvailabilityZones";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const EnableAvailabilityZonesForLoadBalancerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZones: {
      shape: _AvailabilityZones
    }
  }
};
