import { _SubnetList } from "./_SubnetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CacheSubnetGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    CacheSubnetGroupDescription: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    Subnets: {
      shape: _SubnetList
    }
  }
};
