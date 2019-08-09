import { _Listeners } from "./_Listeners";
import { _AvailabilityZones } from "./_AvailabilityZones";
import { _Subnets } from "./_Subnets";
import { _SecurityGroups } from "./_SecurityGroups";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLoadBalancerInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerName", "Listeners"],
  members: {
    LoadBalancerName: {
      shape: {
        type: "string"
      }
    },
    Listeners: {
      shape: _Listeners
    },
    AvailabilityZones: {
      shape: _AvailabilityZones
    },
    Subnets: {
      shape: _Subnets
    },
    SecurityGroups: {
      shape: _SecurityGroups
    },
    Scheme: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
