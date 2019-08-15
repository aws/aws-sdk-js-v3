import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AwsVpcConfiguration: _Structure_ = {
  type: "structure",
  required: ["Subnets"],
  members: {
    Subnets: {
      shape: _StringList
    },
    SecurityGroups: {
      shape: _StringList
    },
    AssignPublicIp: {
      shape: {
        type: "string"
      }
    }
  }
};
