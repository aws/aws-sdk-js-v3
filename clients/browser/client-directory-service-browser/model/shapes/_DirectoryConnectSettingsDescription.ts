import { _SubnetIds } from "./_SubnetIds";
import { _AvailabilityZones } from "./_AvailabilityZones";
import { _IpAddrs } from "./_IpAddrs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DirectoryConnectSettingsDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpcId: {
      shape: {
        type: "string"
      }
    },
    SubnetIds: {
      shape: _SubnetIds
    },
    CustomerUserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SecurityGroupId: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZones: {
      shape: _AvailabilityZones
    },
    ConnectIps: {
      shape: _IpAddrs
    }
  }
};
