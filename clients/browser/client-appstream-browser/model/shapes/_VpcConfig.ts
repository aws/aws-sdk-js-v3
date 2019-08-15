import { _SubnetIdList } from "./_SubnetIdList";
import { _SecurityGroupIdList } from "./_SecurityGroupIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SubnetIds: {
      shape: _SubnetIdList
    },
    SecurityGroupIds: {
      shape: _SecurityGroupIdList
    }
  }
};
