import { _SubnetIds } from "./_SubnetIds";
import { _AvailabilityZones } from "./_AvailabilityZones";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DirectoryVpcSettingsDescription: _Structure_ = {
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
    SecurityGroupId: {
      shape: {
        type: "string"
      }
    },
    AvailabilityZones: {
      shape: _AvailabilityZones
    }
  }
};
