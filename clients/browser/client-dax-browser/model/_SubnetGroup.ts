import { _SubnetList } from "./_SubnetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SubnetGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SubnetGroupName: {
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
    Subnets: {
      shape: _SubnetList
    }
  }
};
