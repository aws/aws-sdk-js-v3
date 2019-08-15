import { _SubnetIds } from "./_SubnetIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DirectoryVpcSettings: _Structure_ = {
  type: "structure",
  required: ["VpcId", "SubnetIds"],
  members: {
    VpcId: {
      shape: {
        type: "string"
      }
    },
    SubnetIds: {
      shape: _SubnetIds
    }
  }
};
