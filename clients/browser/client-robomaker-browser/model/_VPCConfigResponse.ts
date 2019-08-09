import { _Subnets } from "./_Subnets";
import { _SecurityGroups } from "./_SecurityGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VPCConfigResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    subnets: {
      shape: _Subnets
    },
    securityGroups: {
      shape: _SecurityGroups
    },
    vpcId: {
      shape: {
        type: "string"
      }
    },
    assignPublicIp: {
      shape: {
        type: "boolean"
      }
    }
  }
};
