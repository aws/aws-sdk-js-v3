import { _SubnetList } from "./_SubnetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBSubnetGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBSubnetGroupName: {
      shape: {
        type: "string"
      }
    },
    DBSubnetGroupDescription: {
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
    DBSubnetGroupArn: {
      shape: {
        type: "string"
      }
    }
  }
};
