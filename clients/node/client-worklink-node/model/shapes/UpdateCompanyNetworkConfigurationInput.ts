import { _SubnetIds } from "./_SubnetIds";
import { _SecurityGroupIds } from "./_SecurityGroupIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateCompanyNetworkConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["FleetArn", "VpcId", "SubnetIds", "SecurityGroupIds"],
  members: {
    FleetArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    SubnetIds: {
      shape: _SubnetIds
    },
    SecurityGroupIds: {
      shape: _SecurityGroupIds
    }
  }
};
