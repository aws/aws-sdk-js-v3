import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VPCOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SubnetIds: {
      shape: _StringList
    },
    SecurityGroupIds: {
      shape: _StringList
    }
  }
};
