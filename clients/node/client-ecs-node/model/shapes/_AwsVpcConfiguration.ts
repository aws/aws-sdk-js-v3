import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AwsVpcConfiguration: _Structure_ = {
  type: "structure",
  required: ["subnets"],
  members: {
    subnets: {
      shape: _StringList
    },
    securityGroups: {
      shape: _StringList
    },
    assignPublicIp: {
      shape: {
        type: "string"
      }
    }
  }
};
