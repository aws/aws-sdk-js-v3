import { _SecurityGroupIdList } from "./_SecurityGroupIdList";
import { _SubnetList } from "./_SubnetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SecurityDetails: _Structure_ = {
  type: "structure",
  required: ["roleArn", "securityGroupIds", "subnetIds"],
  members: {
    roleArn: {
      shape: {
        type: "string"
      }
    },
    securityGroupIds: {
      shape: _SecurityGroupIdList
    },
    subnetIds: {
      shape: _SubnetList
    }
  }
};
