import { _SubnetList } from "./_SubnetList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterSubnetGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    SubnetGroupStatus: {
      shape: {
        type: "string"
      }
    },
    Subnets: {
      shape: _SubnetList
    },
    Tags: {
      shape: _TagList
    }
  }
};
