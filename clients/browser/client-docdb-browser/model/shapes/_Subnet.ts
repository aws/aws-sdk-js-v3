import { _AvailabilityZone } from "./_AvailabilityZone";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Subnet: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SubnetIdentifier: {
      shape: {
        type: "string"
      }
    },
    SubnetAvailabilityZone: {
      shape: _AvailabilityZone
    },
    SubnetStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
