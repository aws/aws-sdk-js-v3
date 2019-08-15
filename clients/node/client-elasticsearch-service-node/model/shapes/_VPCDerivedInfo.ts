import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VPCDerivedInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VPCId: {
      shape: {
        type: "string"
      }
    },
    SubnetIds: {
      shape: _StringList
    },
    AvailabilityZones: {
      shape: _StringList
    },
    SecurityGroupIds: {
      shape: _StringList
    }
  }
};
